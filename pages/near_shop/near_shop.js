var list={
  data_list:[{
    logo: "/image/near_shop/01.png", title: "匠心坊(恒泰广场店)", address: "A区 103号", distance: "距离260m", url: "", img: ["/image/near_shop/1.png", "/image/near_shop/2.png", "/image/near_shop/3.png"]
  }, {
    logo: "/image/near_shop/02.png", title: "匠心坊(恒泰广场店)", address: "B区 103号", distance: "距离260m", url: "", img: ["/image/near_shop/4.png", "/image/near_shop/5.png", "/image/near_shop/6.png"]
    }, {
      logo: "/image/near_shop/01.png", title: "匠心坊(恒泰广场店)", address: "A区 103号", distance: "距离260m", url: "", img: ["/image/near_shop/1.png", "/image/near_shop/2.png", "/image/near_shop/3.png"]
    }],
    title_text:["全部商铺","距离排序","店铺类型"],
    account:0,
    over_content:["全部","女装","男装","护肤","美妆","零食","家电","灯具","茶盏","字画"],
    classify:0,
    isShowClassify:false,
    isScroll:true
}
Page({
  data:list,
  onShow:function(){
    this.setData({
      account: 0
    });
  },
  clicks:function(e){
    var s=e.currentTarget.dataset.id;
    this.setData({
      account:s
    });
    if(s==1){
      wx.navigateTo({
        url:"/pages/near_shop_map/near_shop_map"
      })
    }
    if(s==2){
      this.setData({
        isShowClassify: true,
        classify: 0,
        isScroll: false
      });
    }
    else{
      this.setData({
        isShowClassify: false,
        classify: 0,
        isScroll: true
      })
    }
  },
  classify_click:function(e){
    var ss = e.currentTarget.dataset.id;
    this.setData({
      classify: ss
    });
  }

})