// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    brandFold: true,
    active: true,
    bookData: [{
      id: "223",
      cover: "https://img3.doubanio.com/view/subject/m/public/s27264181.jpg",
      bookName: "解忧杂货店",
      bookStatus: "可借",
      bookAuthor: "东野圭吾",
      bookIndex: "jd02/10",
      bookPublishers: " 南海出版公司",
      bookCategory: "图书/虚构",
      bookBrief: "现代人内心流失的东西，这家杂货店能帮你找回——僻静的街道旁有一家杂货店，只要写下烦恼投进卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答。因男友身患绝症，年轻女孩静子在爱情与梦想间徘徊；克郎为了音乐梦想离家漂泊，却在现实中寸步难行；少年浩介面临家庭巨变，挣扎在亲情与未来的迷茫中……他们将困惑写成信投进杂货店，随即奇妙的事情竟不断发生。生命中的一次偶然交会，将如何演绎出截然不同的人生？如今回顾写作过程，我发现自己始终在思考一个问题：站在人生的岔路口，人究竟应该怎么做？我希望读者能在掩卷时喃喃自语：我从未读过这样的小说。——东野圭吾",
    }]
  },
  changeFold() {
    this.setData({
      brandFold: !this.data.brandFold,
      active: !this.data.active
    })
    console.log(this.data.brandFold)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id
    })
    console.log(this.data.id)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var id = this.data.id
    var that = this
    wx.request({
      url: '',
      data: {id: id},
      success: function(res) {
        console.log(res)
        that.setData({
          bookdata: res
        })
      }
    })
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