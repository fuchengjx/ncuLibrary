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
      bookName: "追风筝的人11",
      bookAuthor: "[美] 卡勒德·胡赛尼11",
      bookBrief: "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。"+
      "成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？"+
      "故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠"
    }
    ]
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
    wx.login({
      success(res) {
        console.log(res.code)
      }
    })

  }

})
