// pages/index3/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: 0,	// 在data中新增num1
    num2: 0, 	// 在data中新增num2
    result: ''
  },

  change3: function(e) {
    var data = {}
    data[e.target.dataset.id] = Number(e.detail.value)
    this.setData(data)
  }
})