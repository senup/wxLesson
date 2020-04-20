// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },

  num1: 0, // 保存第1个数字
  num2: 0, // 保存第2个数字

  num1change: function(e) {
    this.num1 = Number(e.detail.value)
    console.log('第1个数字为' + this.num1)
  },

  num2change: function(e) {
    this.num2 = Number(e.detail.value)
    console.log('第2个数字为' + this.num2)
  },

  compare: function(e) {
    var str = '两数相等'
    if (this.num1 > this.num2) {
      str = '第1个数大'
    } else if (this.num1 < this.num2) {
      str = '第2个数大'
    }
    this.setData({
      result: str
    })
    // this.data.result = str // 这种方式无法改变页面中的{{result}}的值
  }
})