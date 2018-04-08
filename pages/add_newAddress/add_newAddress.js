var list_data={
  region:["北京市","北京市","丰台区"],
  customItem:"全部"
}
Page({
  data:list_data,
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})