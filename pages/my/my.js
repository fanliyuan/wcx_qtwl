
var data_list={
  avatar:[],
  my_others: [{ title: "我的红包", info: "共领过37个红包", pic: "/image/my/icon-5.png" }, { title: "我的收藏", info: "最爱的都在这里", pic: "/image/my/icon-6.png" }, { title: "我的推广", info: "享你所想给你爱", pic: "/image/my/icon-7.png" }, { title: "我的店铺", info: "了解我们点这里", pic: "/image/my/icon-8.png" }]
};
Page({
  data:data_list,
  onLoad:function(){
    var that=this;
    wx.getUserInfo({
      success:function(res){
        var userInfo=res.userInfo;
        var avatarUrl=userInfo.avatarUrl;
        var nickName=userInfo.nickName;
        that.setData({
          avatar:[avatarUrl,nickName]
        })
      }
    })
  }
})