//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // showModal: false
    books: [
    {
      id: "11",
      cover: "https://img3.doubanio.com/view/subject/m/public/s1727290.jpg", 
      bookName: "追风筝的人",
      author: "[美] 卡勒德·胡赛尼",
      summary: "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。"+
      "成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？"+
      "故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠"
    },{
      id: "11",
      cover: "https://img3.doubanio.com/view/subject/l/public/s27264181.jpg", 
      bookName: "解忧杂货店",
      author: "[日] 东野圭吾 ",
      summary: "现代人内心流失的东西，这家杂货店能帮你找回——僻静的街道旁有一家杂货店，只要写下烦恼投进卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答。因男友身患绝症，年轻女孩静子在爱情与梦想间徘徊；克郎为了音乐梦想离家漂泊，却在现实中寸步难行；少年浩介面临家庭巨变，挣扎在亲情与未来的迷茫中……他们将困惑写成信投进杂货店，随即奇妙的事情竟不断发生。生命中的一次偶然交会，将如何演绎出截然不同的人生？如今回顾写作过程，我发现自己始终在思考一个问题：站在人生的岔路口，人究竟应该怎么做？我希望读者能在掩卷时喃喃自语：我从未读过这样的小说。——东野圭吾"
    }]
  },
  //事件处理函数
  goSearch: function() {   
    wx.navigateTo({
      url: "/pages/search/search"
    })
  },
  getDetail: function(e) {
    console.log(e.currentTarget)
    console.log(e.currentTarget.dataset)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },
  popupCheck: function() {
   console.log("popupCheck")
   this.setData({
     showModal: true
   })
  },
  onLoad: function() {
      console.log("openID", app.globalData.openID)
      wx.request({
        url: 'https://lib.exql.top/api/book/recommend',
        header: {wx_open_id: app.globalData.openID},
        success: (res) => {
          this.setData({
            books: res.data.data
          })
        }
      })
  },

  onReady: function () {
   
  }

})
