// pages/index/index.js
const calc = require('../../utils/calc.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '0',
    op: ''
  },

  result: null,
  isClear: false,

  // 数字按钮事件处理函数
  numBtn: function(e) {
    var num = e.target.dataset.val
    if (this.data.num === '0' || this.isClear) {
      this.setData({
        num: num
      })
      this.isClear = false
    } else {
      this.setData({
        num: this.data.num + num
      })
    }
  },

  // 运算符事件处理函数
  opBtn: function(e) {
    var op = this.data.op
    var num = Number(this.data.num)
    this.setData({
      op: e.target.dataset.val
    })
    if (this.isClear) {
      return
    }
    this.isClear = true
    if (this.result === null) {
      this.result = num
      return
    }
    if (op === '+') {
      this.result = calc.add(this.result, num)
    } else if (op === '-') {
      this.result = calc.sub(this.result, num)
    } else if (op === '*') {
      this.result = calc.mul(this.result, num)
    } else if (op === '/') {
      this.result = calc.div(this.result, num)
    } else if (op === '%') {
      this.result = this.result % num
    }
    this.setData({
      num: this.result + ''
    })
  },

  // 小数点事件处理函数
  dotBtn: function() {
    if (this.isClear) {
      this.setData({
        num: '0.'
      })
      this.isClear = false
      return
    }
    if (this.data.num.indexOf('.') >= 0) {
      return
    }
    this.setData({
      num: this.data.num + '.'
    })
  },

  // DEL按钮处理函数
  delBtn: function() {
    var num = this.data.num.substr(0, this.data.num.length - 1)
    this.setData({
      num: num === '' ? '0' : num
    })
  },

  // C按钮事件处理函数
  resetBtn: function() {
    this.result = null
    this.isClear = false
    this.setData({
      num: '0',
      op: ''
    })
  }
})