// pages/collection/collection.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // books: [{
    //   bookName: "解忧杂货店",
    //   bookStatus: "可借",
    //   author: "东野圭吾",
    //   bookIndex: "jd02/10",
    //   bookPublishers: " 南海出版公司",
    // },{
    //   bookName: "解忧杂货店",
    //   bookStatus: "可借",
    //   author: "东野圭吾",
    //   bookIndex: "jd02/10",
    //   bookPublishers: " 南海出版公司",
    // },{
    //   bookName: "解忧杂货店",
    //   bookStatus: "可借",
    //   author: "东野圭吾",
    //   bookIndex: "jd02/10",
    //   bookPublishers: " 南海出版公司",
    // }]
    books:[]
  },
  cancelCollection: function(e) {
    console.log("cancelcollection",e)
    wx.request({
      url: 'https://lib.exql.top/api/book/collect',
      header: {wx_open_id: app.globalData.openID},
      method: 'DELETE',
      data: {"bookId": parseInt(e.currentTarget.id)},
      success: (res) => {
        if (res.data.status) {
          this.getCollectList();
          wx.showToast({
            title: '取消收藏',
            duration: 2000
          })
        }
      }
    })
  },
  getCollectList: function(res) {
    wx.request({
      url: 'https://lib.exql.top/api/book/collect',
      header: {wx_open_id: app.globalData.openID},
      success: (res) => {
        this.setData({
          books: res.data.data
        })
        wx.showToast({
          title: '获取成功',
          duration: 1000
        })
        console.log("getCollect", this.data.books)
      }
    })
  },
  
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCollectList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPullDownRefresh:function()
  {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(() =>
    {
      // complete
      this.getCollectList()
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    },1500);
  },
})