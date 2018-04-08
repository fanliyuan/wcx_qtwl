var app=getApp();
var listData={
  goods_list: [{ goods: "辽宁省", id: 1 ,url:""}, { goods: "吉林省", id: 2 ,url:""}, { goods: "黑龙江省", id: 3 ,url:""}, { goods: "内蒙古自治区", id: 4 ,url:""}, { goods: "甘肃省", id: 5,url:"" }, { goods: "新疆维吾尔自治区", id: 6 ,url:""}, { goods: "浙江省", id: 7 ,url:""}, { goods: "青海省", id: 8 ,url:""}, { goods: "江苏省", id: 9,url:"" }],
  rightHeight:0,
  active_list:["active"],
  rmfl: [{ title: "热门分类", content: [{ name: "手机", pic: "/image/activity/1.png" }, { name: "平板电脑", pic: "/image/activity/2.png" }, { name: "热水器", pic: "/image/activity/1.png" }, { name: "电视", pic: "/image/activity/2.png" }, { name: "热水器", pic: "/image/activity/1.png" }, { name: "电视", pic: "/image/activity/2.png" }] }, { title: "男士热搜", content: [{ name: "手机", pic: "/image/activity/1.png" }, { name: "平板电脑", pic: "/image/activity/2.png" }, { name: "热水器", pic: "/image/activity/1.png" }, { name: "电视", pic: "/image/activity/2.png" }, { name: "热水器", pic: "/image/activity/1.png" }, { name: "电视", pic: "/image/activity/2.png" }]}]
};
Page({
  data:listData,
  onLoad:function(){
    var sh = app.windowHe.height -49;
    this.setData({
      rightHeight:sh
    });
  },
  click:function(res){
    var ids=res.currentTarget.dataset.id;
    var list=this.data.active_list;
    for(var i=0;i<list.length;i++){
      list[i]="";
    }
    list[ids]="active";
    this.setData({
      active_list:list
    })

    var urls=res.currentTarget.dataset.url;
    app.request({
      url:urls,
      success:function(res){

      }
    })
  }
})