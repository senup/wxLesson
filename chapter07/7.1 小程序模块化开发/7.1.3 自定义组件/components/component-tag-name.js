Component({
  // 组件的属性列表
  properties: {
    value: {
      type: String,
      value: 'default value',
    }
  },
  // 组件的初始数据
  data: {
    hello: '欢迎'
  },
  // 组件的方法列表
  methods: {
    onTap: function() {
      console.log('onTap')
    }
  }
})