// pages/test/test.js
Page({

  scroll: function (e) {
    console.log(e.detail)
  },

  onReady: function () {
    // 创建InnerAudioContext实例
    var audioCtx = wx.createInnerAudioContext()
    // 设置音频资源地址
    audioCtx.src = 'http://localhost:3000/1.mp3'
    // 当开始播放时，输出调试信息
    audioCtx.onPlay(function () {
      console.log('开始播放')
    })
    // 当发生错误时，输出调试信息
    audioCtx.onError(function (res) {
      console.log(res.errMsg)	// 错误信息
      console.log(res.errCode)	// 错误码
    })
    // 开始播放
    audioCtx.play()
  },

  sliderChanging: function (e) {
    console.log(e.detail.value)
  }

})