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
    items: [
      { id: '1', value: '计算机科学', checked:false},
      { id: '2', value: '哲学、宗教', checked: false},
      { id: '3', value: '艺术与设计', checked: false},
      { id: '4', value: '数理科学与化学', checked: false},
      { id: '5', value: '英天文与地球科学', checked: false},
      { id: '6', value: '医药、卫生', checked: false},
    ],
    subjects: [],
  },

  /**
   * 组件的方法列表
   */
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
      this.setData({
        subjects: e.detail.value.concat()
      })
      console.log("subject", this.data.subjects)
    }
  }
})
