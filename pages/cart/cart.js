var list_data={
  status:{name:"编辑",code:0},
  cart_list: [{ shop: "旗舰店", goods: [{ pic: "/image/cart/goods.png", name: "商品名 F80(17-27英寸) 液晶电脑显示器支架桌面显示支架", color: "颜色分类", price: 150.00, num: 56 }, { pic: "/image/cart/goods.png", name: "商品名 F80(17-27英寸) 液晶电脑显示器支架桌面显示支架", color: "颜色分类", price: 150.00, num: 1 }] }, { shop: "旗舰店", goods: [{ pic: "/image/cart/goods.png", name: "商品名 F80(17-27英寸) 液晶电脑显示器支架桌面显示支架", color: "颜色分类", price: 150.00, num: 2 }, { pic: "/image/cart/goods.png", name: "商品名 F80(17-27英寸) 液晶电脑显示器支架桌面显示支架", color: "颜色分类", price: 150.00, num: 1 }] }]
};
Page({
  data:list_data,
  changeStatus:function(e){
    var code=this.data.status.code;
    if(code==0){
      this.setData({
        status:{name:"完成",code:1}
      })
    }
    else{
      this.setData({
        status: { name: "编辑", code: 0 }
      })
    }
  },
  delss:function(e){
    var shopId=e.currentTarget.dataset.sid;
    var goodsId=e.currentTarget.dataset.gid;
    var list=this.data.cart_list;
    if (list[shopId].goods[goodsId].num<=1){
      list[shopId].goods[goodsId].num=1;
    }
    else
      list[shopId].goods[goodsId].num--;
    this.setData({
      cart_list:list
    })
  },
  sums:function(e){
    var shopId = e.currentTarget.dataset.sid;
    var goodsId = e.currentTarget.dataset.gid;
    var list = this.data.cart_list;
      list[shopId].goods[goodsId].num++;
    this.setData({
      cart_list: list
    })
  }
})