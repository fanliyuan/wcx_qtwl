var list_data={
  banner_list:{
    list: ["/image/hot_detail/ms_detail.png", "/image/hot_detail/ms_detail.png", "/image/hot_detail/ms_detail.png"]
  },
  goods_data:{
    service:false,
    goods_info:false,
    modal_data: {
      color: [{ name: "白", id: 1 }, { name: "红", id: 2 }, { name: "绛紫", id: 3 }, { name: "蓝", id: 4 }, { name: "土红", id: 5 }, { name: "蔚蓝", id: 6 }],
      size: [{ name: "X", id: 1 }, { name: "L", id: 2 }, { name: "XXL", id: 3 }]
    },
    activeId:9999,
    activeSize:9999
  },
  choose:{
    color:0,
    size:0,
    num:1
  },
  info_toast:{
    isShow:false,
    title:"奇通商城：请选择商品的规格"
  }
 
}
Page({
  data:list_data,
 
  service_show:function(){
    var ups = "goods_data.service";
    this.setData({
      [ups]:true
    })
  },
  service_close:function(){
    var ups = "goods_data.service";
    this.setData({
      [ups]: false
    })
  },
  info_show:function(){
    var ups = "goods_data.goods_info";
    this.setData({
      [ups]: true
    })
  },
  info_close: function () {
    var ups = "goods_data.goods_info";
    this.setData({
      [ups]: false
    })
  },
  info_done:function(){
    var choose_data=this.data.choose;
    if(choose_data.color==0 || choose_data.size==0){
      this.setData({
        info_toast: {
          isShow: true,
          title: "奇通商城：请选择商品的规格"
        }
      })
      var that=this;
      setTimeout(function(){
        that.setData({
          info_toast: {
            isShow: false,
            title: "奇通商城：请选择商品的规格"
          }
        })

      },1500)
    }
    else{
      var ups = "goods_data.goods_info";
      this.setData({
        [ups]: false
      })
    }
  },
  chooseColor:function(e){
    var targets=e.currentTarget.dataset.id;
    var ups ="goods_data.activeId";
    var colorss="choose.color";
    this.setData({
      [ups]:targets,
      [colorss]: targets
    })
  },
  chooseSize:function(e){
    var targets = e.currentTarget.dataset.id;
    var ups = "goods_data.activeSize";
    var sizes = "choose.size";
    this.setData({
      [ups]: targets,
      [sizes]: targets
    })
  }
})