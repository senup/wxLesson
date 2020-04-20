const app = getApp()
const fetch = app.fetch
Page({
  data: {},
  enableRefresh: false,
  onLoad: function() {
    wx.showLoading({
      title: '努力加载中'
    })
    fetch('food/record').then(data => {
      wx.hideLoading()
      this.setData(data)
    })
  },
  onShow: function () {
    if (this.enableRefresh) {
      this.onLoad()
    } else {
      this.enableRefresh = true
    }
  }
})