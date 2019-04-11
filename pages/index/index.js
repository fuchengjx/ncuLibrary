//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  //事件处理函数
  goSearch: function() {
    wx.navigateTo({
      url: "/pages/search/search"
    })
  },
  popupCheck: function() {
   console.log("popupCheck")
  },
  onLoad: function() {
    wx.login({
      success(res) {
        console.log(res.code)
      }
    })

  }

})
