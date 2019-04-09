//app.js
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function() {
    console.log("onLoad");
    wx.getUserInfo({
      withCredentials: false,
      success: res => {
        this.globalData.userInfo = res.userInfo
        console.log(this.globalData)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
