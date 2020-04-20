const app = getApp()
const fetch = app.fetch
Page({
  data: {
    swiper: [],
    ad: '',
    category: []
  },
  onLoad: function (options) {
    var callback = () => {
      wx.showLoading({
        title: '努力加载中',
        mask: true
      })
      fetch('food/index').then(data => {
        wx.hideLoading()
        this.setData({
          swiper: data.img_swiper,
          ad: data.img_ad,
          category: data.img_category
        })
      }, () => {
        callback()
      })
    }
    if (app.userInfoReady) {
      callback()
    } else {
      app.userInfoReadyCallback = callback
    }
  },
  start: function () {
    wx.navigateTo({
      url: '/pages/list/list',
    })
  }
})