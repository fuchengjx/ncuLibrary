//app.js
App({
  onLaunch: function() {
    console.log("onLoad");
    wx.login({
      success: res => {
        this.globalData.openbookId = res.code
        console.log("res.code ", res.code+"  openID: ",this.globalData.openID)
      }
    })
    // wx.getUserInfo({
    //   withCredentials: false,
    //   success: res => {
    //     this.globalData.userInfo = res.userInfo
    //     console.log("app.js globalData", this.globalData)
    //     // console.log(res)
    //   },
    //   fail: res => {
    //     console.log("getUerInfo Error",res)
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    openID: 'none openID'
  }
})
