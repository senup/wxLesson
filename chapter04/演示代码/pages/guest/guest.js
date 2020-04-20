// pages/guest/guest.js
Page({
  data: {
    array: ['HTML', 'CSS', 'JavaScript', 'Photoshop'],
    index: 1
  },
  pickerChange: function (e) {
    console.log('用户选择的值为：', e.detail.value)
    this.setData({ index: e.detail.value })
  }
})