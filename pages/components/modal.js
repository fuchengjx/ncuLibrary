// pages/components/modal.js
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
    item: [
      { name: 'USA', value: '美国', checked:false},
      { name: 'CHN', value: '美国', checked: true },
      { name: 'BRA', value: '巴西', checked: false},
      { name: 'JPN', value: '日本', checked: false},
      { name: 'ENG', value: '英国', checked: false},
      { name: 'FRA', value: '法国', checked: false},
    ],
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
      console.log("this is a confirm",e)
      this.setData({ show: false })
      this.triggerEvent('confirm')
    }
  }
})
