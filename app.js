//app.js
App({
  onLaunch: function() {
    console.log("onLoad");
    wx.getUserInfo({
      withCredentials: false,
      success: res => {
        this.globalData.userInfo = res.userInfo
        console.log(this.globalData)
        // console.log(res)
      },
      fail: res => {
        console.log("getUerInfo Error",res)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
