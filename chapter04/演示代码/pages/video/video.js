// pages/video/video.js
Page({
  data: {
    src: 'http://localhost:3000/1.mp4',
    danmuList: [
      { text: '第 1s 出现的弹幕', color: '#ff0000', time: 1 },
      { text: '第 3s 出现的弹幕', color: '#ff00ff', time: 3 }
    ]
  },
  videoContext: null,
  inputValue: '',
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: '#f90'
    })
  },
  bindButtonTap: function () {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],	// 视频选择的来源，相册和相机
      maxDuration: 60,						// 拍摄视频最长拍摄时间（秒）
      camera: 'back',		// 默认拉起的是前置（front）或者后置（back）摄像头
      success: res => {	// 成功时执行的回调函数
        this.setData({
          src: res.tempFilePath	// 	选定视频的临时文件路径
        })
      }
    })
  }
})