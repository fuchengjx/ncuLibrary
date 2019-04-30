// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputTxt: '',
      books: [{
        bookName: "解忧杂货店",
        bookStatus: "可借",
        author: "东野圭吾",
        bookIndex: "jd02/10",
        bookPublishers: " 南海出版公司",
      },{
        bookName: "解忧杂货店",
        bookStatus: "不可借",
        author: "东野圭吾",
        bookIndex: "jd02/10",
        bookPublishers: " 南海出版公司",
      },{
        bookName: "解忧杂货店",
        bookStatus: "可借",
        author: "东野圭吾",
        bookIndex: "jd02/10",
        bookPublishers: " 南海出版公司",
      }]
  },
  searchSubmit (e) {
    console.info(e);
    console.info('form发生了submit事件，携带数据为：', e.detail.value)
    wx.request({
      url: 'https://lib.exql.top/api/book/query',
      header: {wx_open_id: app.globalData.openID},
      methods: 'POST',
      data: {"key": e.detail.value},
      success: (res) => {
        this.setData({
          books: res.data.data
        })
        console.log("serchSubmit: ", res.data.data)
      }
    })
  },
  clearInput() {
    this.setData ({
       inputTxt: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})
