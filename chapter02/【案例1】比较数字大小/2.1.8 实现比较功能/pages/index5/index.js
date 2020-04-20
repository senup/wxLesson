// pages/index5/index.js
Page({
  formCompare: function (e) {
    var str = '两数相等'
    var num1 = Number(e.detail.value.num1)
    var num2 = Number(e.detail.value.num2)
    if (num1 > num2) {
      str = '第1个数大'
    } else if (num1 < num2) {
      str = '第2个数大'
    }
    this.setData({ result: str })
  }
})