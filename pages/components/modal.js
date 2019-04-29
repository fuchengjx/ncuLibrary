// pages/components/modal.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示modal
    show: {
      type: Boolean,
      value: false
    },
    height: {
      type: String,
      value: '80%'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultChecked: false,
    items: [
      { subjectId: 1, subjectName: '计算机科学', checked:false},
      { subjectId: 2, subjectName: '哲学、宗教', checked: false},
      { subjectId: 3, subjectName: '艺术与设计', checked: false},
      { subjectId: 4, subjectName: '数理科学与化学', checked: false},
      { subjectId: 5, subjectName: '英天文与地球科学', checked: false},
      { subjectId: 6, subjectName: '医药、卫生', checked: false},
    ],
    subjects: [],
  },

  /**
   * 组件的方法列表
   */
  created: function () {
    wx.request({
      url: 'https://lib.exql.top/api/book/subject/setting',
      header: {wx_open_id: app.globalData.openID},
      success: (res) => {
        this.setData({
          items: res.data.data
        })
        console.log("setting: ",res.data.data)
      }
    })
  },
  methods: {
    clickMask(e) {
      this.setData({show: false})
      console.log("this is clickMask",e)
    },
    confirm(e) {
      this.setData({ show: false })
      this.triggerEvent('confirm')
      wx.request({
        url: 'https://lib.exql.top/api/book/subject/info',
        header: {wx_open_id: app.globalData.openID},
        method: 'PUT',
        data: {"subjects": this.data.subjects}
      })
    },
    checkboxChange(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      let subjectsInt = []
      for (let i = 0, len = e.detail.value.length; i < len; i++ ) {
        console.log(e.detail.value[i])
        subjectsInt.push(parseInt(e.detail.value[i]))
      }
      this.setData({
        subjects: subjectsInt
      })
      console.log("subject", this.data.subjects)
    }
  }
})
