// pages/WeUI/WeUI.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tabs: ['正在热映', '搜索', '分类'], // 标签页标题数组
    activeIndex: 0, // 当前选中的标签页索引
    sliderOffset: 0, // 指示条的平移距离
    sliderLeft: 0, // 指示条的left值
    contents: [{
        title: '龙猫',
        article: '由宫崎骏执导，吉卜力工作室出品的动画电影。'
      },
      {
        title: '龙猫',
        article: '由宫崎骏执导，吉卜力工作室出品的动画电影。'
      },
      {
        title: '龙猫',
        article: '由宫崎骏执导，吉卜力工作室出品的动画电影。'
      }
    ],
    poster: '/images/poster.jpg',
    grids: [
      '爱情', '剧情', '喜剧', '家庭', '动画', '文艺', '战争', '动作', '科幻'
    ]
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})