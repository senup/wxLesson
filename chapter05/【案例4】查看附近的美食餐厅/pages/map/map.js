// 腾讯地图SDK
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js')
// 注册后获得的key值
var key = ''
Page({
  qqmapsdk: new QQMapWX({
    key: key
  }),
  data: {
    mapw: '100%', // 地图宽度
    maph: '0', // 地图高度
    scale: '18', // 缩放
    longitude: null, // 地图中心点经度
    latitude: null, // 地图中心点纬度
    markers: null // 标记点
  },
  markIndex: 0,
  mapCtx: null,
  onLoad: function() {
    this.mapCtx = wx.createMapContext('map')
    // 获取窗口的宽度和高度
    wx.getSystemInfo({
      success: res => {
        var mapw = res.windowWidth // 宽度
        var maph = res.windowHeight // 高度
        this.setData({
          maph: maph + 'px',
          // 设置控件显示
          controls: [{
            id: 1,
            iconPath: '/images/banner.png',
            position: {
              left: 0,
              top: 10,
              width: mapw,
              height: 74
            },
            clickable: true // 可以点击控件
          }, {
            id: 2,
            iconPath: '/images/gps.png',
            position: {
              left: 10,
              top: maph - 50,
              width: 40,
              height: 40
            },
            clickable: true
          }, {
            id: 3,
            iconPath: '/images/gift.png',
            position: {
              left: mapw - 60,
              top: maph - 120,
              width: 40,
              height: 40
            },
            clickable: true
          }, {
            id: 4,
            iconPath: '/images/cost.png',
            position: {
              left: mapw - 60,
              top: maph - 50,
              width: 40,
              height: 40
            },
            clickable: true
          }]
        })
      }
    })
  },
  // 获取当前位置(经纬度)
  onReady: function() {
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  getFood: function(longitude, latitude) {
    // 调用接口
    this.qqmapsdk.search({
      // 搜索关键词
      keyword: '餐厅',
      location: {
        longitude: longitude,
        latitude: latitude
      },
      success: res => {
        console.log(res.data)
        var mark = []
        // 返回查找结果
        for (let i in res.data) {
          mark.push({
            iconPath: '/images/food.png',
            id: i,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          })
        }
        mark.push({
          iconPath: '/images/center.png',
          id: res.data.length,
          latitude: latitude,
          longitude: longitude
        })
        // 将搜索结果显示在地图上
        this.setData({
          markers: mark
        })
      }
    })
  },
  // 地图移动时，更新地图上的标记点
  bindRegionChange: function(e) {
    if (e.type === 'end') {
      this.mapCtx.getCenterLocation({
        success: res => {
          this.getFood(res.longitude, res.latitude)
        }
      })
    }
  },
  // 点击控件，id=2返回中心位置，id=1跳转优惠券页面
  bindControlTap: function(e) {
    var id = e.controlId
    if (id === 1) {
      wx.navigateTo({
        url: '/pages/coupon/coupon'
      })
    } else if (id === 2) {
      // 将地图中心移动到当前定位点
      this.mapCtx.moveToLocation()
    }
  }
})