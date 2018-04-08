var list={
  map_marker:[{
    iconPath:"/image/near_shop/icon-shop.png",
    id:0,
    latitude: 39.90469,
    longitude: 116.40717,
    title:"hello",
     width:28,
     height:36,
    label:{
      content:"嘉和一品",
      fontSize:14,
      color:"#000",
      textAlign:"center"
    }

  },
    {
      iconPath: "/image/near_shop/icon-shop.png",
      id: 1,
      latitude: 39.90880,
      longitude: 116.42000,
      title: "hello",
      width: 28,
      height: 36,
      label: {
        content: "吉野家",
        fontSize: 14,
        color: "#000",
        textAlign: "center"
      }
    }]
}
Page({
  data:list,
  onLoad:function(){
    wx.getLocation({
      type:'wgs84',
      success:function(res){
        console.log(res);
      }
    })
  }
})
