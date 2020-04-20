var welcome = require('../../utils/welcome.js')
Page({
  data: {},
  onLoad: function () {
    this.setData({
      welcome: welcome.welcome
    })
    console.log(this.data.welcome)    // welcome
  }
})