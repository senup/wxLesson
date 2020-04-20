const app = getApp()
const fetch = app.fetch
Page({
  data: {},
  onLoad: function(options) {
    var id = options.order_id
    wx.showLoading({
      title: '努力加载中'
    })
    fetch('food/order', {
      id: id
    }).then(data => {
      this.setData(data)
      wx.hideLoading()
    }, () => {
      this.onLoad(options)
    })
  },
  comment: function(e) {
    this.data.comment = e.detail.value
  },
  pay: function() {
    var id = this.data.id
    wx.showLoading({
      title: '正在支付'
    })
    fetch('food/order', {
      id: id,
      comment: this.data.comment
    }, 'POST').then(data => {
      return fetch('food/pay', {
        id: id
      }, 'POST')
    }).then(data => {
      wx.hideLoading()
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          wx.navigateTo({
            url: '/pages/order/detail/detail?order_id=' + id
          })
        }
      })
    }).catch(() => {
      this.pay()
    })
  }
})