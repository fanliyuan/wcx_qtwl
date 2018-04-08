var order_list={
  list_data:['全部','待付款','待收货','待评价'],
  status:[true,false,false,false],
  active_id:0,
  order_all: { shop_data: [{ shop_name: "旗舰店", sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: true, qxdd: false }, status: "卖家已发货", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }, { shop_name: "旗舰店", sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: true, qxdd: false }, status: "卖家已发货", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }, { shop_name: "旗舰店", sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: false, qxdd: false }, status: "卖家已发货", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }]},
  waitPay: { shop_data: [{ shop_name: "旗舰店", sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: false, qxdd: true }, status: "待付款", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }, { shop_name: "旗舰店",sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: false, qxdd: true }, status: "待付款", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }] },
  waitGet: { shop_data: [{ shop_name: "旗舰店", sz: { ckwl: true, ycsh: true, qrsh: true, pjdd: false, qxdd: false }, status: "卖家已发货", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }, { shop_name: "旗舰店", sz: { ckwl: true, ycsh: true, qrsh: true, pjdd: false, qxdd: false }, status: "卖家已发货", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }] },
  waitComment: { shop_data: [{ shop_name: "旗舰店", sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: true, qxdd: false }, status: "交易完成", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }, { shop_name: "旗舰店", sz: { ckwl: false, ycsh: false, qrsh: false, pjdd: true, qxdd: false }, status: "交易完成", sum_price: 450, sum_num: 78, goods: [{ title: "商品名 F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 150.00, num: 1 }, { title: "F80(17-27英寸) 液晶电视显示器支架桌面显示支架", pic: "/image/cart/goods.png", price: 750.00, num: 22 }] }] }
};
Page({
  data:order_list,
  clickTitle:function(e){
    var i=e.currentTarget.dataset.id;
    this.setData({
      active_id:i
    });
    var j=this.data.status;
    for (var ii = 0; ii <j.length;ii++) {
      j[ii]=false;
    }
    j[i]=true;
    this.setData({
      status:j
    })
  }
})