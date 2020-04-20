var animation
var angle = 0 // 角度
var x1, y1, x3, y3
// 判断坐标系是顺时针还是逆时针
function judgeturn(x1, y1, x3, y3) {
  var x2 = 150
  var y2 = 150
  return !((x2 - x1) * (y3 - y2) - (x3 - x2) * (y2 - y1) > 0)
}
Page({
  // 创建动画
  onShow: function() {
    animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
  },
  // 滑动开始
  start: function(e) {
    x1 = e.touches[0].clientX
    y1 = e.touches[0].clientY
  },
  // 滑动结束
  end: function(e) {
    x3 = e.changedTouches[0].clientX
    y3 = e.changedTouches[0].clientY
    console.log(x1, x3, y1, y3)
    if (x1 === x3 && y1 === y3) {
      return
    } else if (judgeturn(x1, y1, x3, y3)) {
      // 顺时针
      angle = angle + 80
      animation.rotate(angle).step()
      this.setData({
        animation: animation.export()
      })
    } else {
      angle = angle - 80
      animation.rotate(angle).step()
      this.setData({
        animation: animation.export()
      })
    }
  },
  rotate: function() {
    animation.rotate(Math.random() * 720 - 360).step()
    this.setData({
      animation: animation.export()
    })
  },
  scale: function() {
    animation.scale(Math.random() * 2).step()
    this.setData({
      animation: animation.export()
    })
  },
  translate: function() {
    animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({
      animation: animation.export()
    })
  },
  skew: function() {
    animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: animation.export()
    })
  },
  rotateAndScale: function() {
    animation.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step()
    this.setData({
      animation: animation.export()
    })
  },
  rotateThenScale: function() {
    animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({
      animation: animation.export()
    })
  },
  all: function() {
    // 旋转-缩放-移动-倾斜
    animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({
      animation: animation.export()
    })
  },
  allOrder: function() {
    // 旋转-缩放-移动-倾斜
    animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: animation.export()
    })
  },
  reset: function () {
    animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({ duration: 0 })
    this.setData({
      animation: animation.export()
    })
  }
})