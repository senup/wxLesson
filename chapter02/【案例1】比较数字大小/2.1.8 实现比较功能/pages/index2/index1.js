// pages/index2/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },

  num1: 0, // 保存第1个数字
  num2: 0, // 保存第2个数字

  change: function (e) {
    this[e.currentTarget.id] = Number(e.detail.value)
  },

  compare: function (e) {
    var str = '两数相等'
    if (this.num1 > this.num2) {
      str = '第1个数大'
    } else if (this.num1 < this.num2) {
      str = '第2个数大'
    }
    this.setData({
      result: str
    })
  }
})