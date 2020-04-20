Page({
  submit: function (e) {
    wx.request({
      method: 'post',
      url: 'http://127.0.0.1:3000/',
      data: e.detail.value,
      success: function (res) {
        console.log(res)
      }
    })
  }
})