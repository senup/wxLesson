Component({
  data: {
    list: [1, 2, 3, 4, 5]
  },
  methods: {
    addItem: function () {
      var list = this.data.list
      list.push(list.length + 1)
      this.setData({
        list: list
      })
    },
    delItem: function () {
      var list = this.data.list
      if (list.length > 0) {
        list.pop()
      }
      this.setData({
        list: list
      })
    }
  }
})