// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  compare: function(e) {
    console.log('比较按钮被单击了')
  	console.log(e) 
  },

  viewtap: function (e) {
    console.log(e.target.id + '-' + e.currentTarget.id)
  },

  outerTap: function() {
    console.log('outerTap')
  },

  middleTap: function() {
    console.log('middleTap')
  },
  
  innerTap: function() {
    console.log('innerTap')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面初次渲染完成')
    //wx.navigateTo({
    //  url: '/pages/test/test?name1=value1&name2=value2'
    //})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('此时用户下拉触顶')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('此时用户上拉触底')
  },

  /**
   * 页面滚动事件的处理函数
   */
  onPageScroll: function (options) {
    console.log('此时用户正在滚动页面')
    console.log('滚动距离：' + options.scrollTop)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})