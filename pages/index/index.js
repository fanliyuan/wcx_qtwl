
//index.js
//获取应用实例
//const app = getApp()

/* Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({ 
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
}) */
var api=require('../../api.js');
var app=getApp();
var listData={
  banner_list: [{ page_url: "", title: "pic1", pic_url: "/image/banner/banner.png" }, { page_url: "", title: "pic2", pic_url: "/image/banner/banner.png" }, { page_url: "", title: "pic3", pic_url: "/image/banner/banner.png" }],
  jingxue_list: [{ pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家居家装" }, { pic_url: "icon-1-欢.png", title: "厨房用具" }, { pic_url: "icon-1-欢.png", title: "男女箱包" }, { pic_url: "icon-1-欢.png", title: "母婴玩具" }, { pic_url: "icon-1-欢.png", title: "流行女装" }, { pic_url: "icon-1-欢.png", title: "精品男装" }, { pic_url: "icon-1-欢.png", title: "时尚女鞋" }, { pic_url: "icon-1-欢.png", title: "流行男鞋" }, { pic_url: "icon-1-欢.png", title: "服装配饰" }, { pic_url: "icon-1-欢.png", title: "礼品饰品" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }, { pic_url: "icon-1-欢.png", title: "家用电器" }],
  isActive: ["active",""],
  mainList:["商家","抢购"],
  isMerchant:true,
  mainList_index: [{ url: "", title: "红包雨", img: "/image/index_icon/1.png" }, { url: "", title: "积分商城", img: "/image/index_icon/2.png" }, { url: "", title: "附近商家", img: "/image/index_icon/3.png" }, { url: "", title: "奇通物供", img: "/image/index_icon/4.png" }, { url: "", title: "每日上新", img: "/image/index_icon/5.png" }],
  tjShop_list: [{ pic: "/image/index_icon/3.png", title: "女神日记", info: "化妆品", url: "" }, { pic: "/image/index_icon/3.png", title: "居酒屋", info: "酒水 清茶", url: "" }, { goods_img: "/image/index_icon/3.png", title: "一糖一品", info: "烘焙 甜品", url: ""}],
  interst_list: [{ goods_img: "/image/goods/index_01.png", goods_name: "镂空灯笼 提篮风灯 手工艺品复古做旧", goods_price: 4589, done_num: 17, url: "/pages/goods_detail/goods_detail" }, { goods_img: "/image/goods/index_02.png", goods_name: "柱状贴片 玻璃烛台 装饰摆件 美式饰品", goods_price: 1389, done_num: 17, url: "/pages/goods_detail/goods_detail" }, { goods_img: "/image/goods/index_01.png", goods_name: "镂空灯笼 提篮风灯 手工艺品复古做旧", goods_price: 4589, done_num: 17, url: "/pages/goods_detail/goods_detail" }, { goods_img: "/image/goods/index_02.png", goods_name: "柱状贴片 玻璃烛台 装饰摆件 美式饰品", goods_price: 1389, done_num: 17, url: "/pages/goods_detail/goods_detail"  }],
  location:"",
  isLoading:false,
  page:2,
  isMore:false
};
Page({
  data:listData,
  scroll:function(e){
  },
  toRigth:function(e){},

  get_merchant:function(e){
    
    var es=e.currentTarget.dataset.id;
    if(es==0){
      this.setData({
        isMerchant:true
      })
    }
    else{
      this.setData({
        isMerchant: false
      })
    }
    var tmp=this.data.isActive;
    for(var i=0;i<tmp.length;i++){
      tmp[i]="";
    }
    tmp[es]="active"
    this.setData({
      isActive:tmp
    })
  },
  scans:function(){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },
  onReachBottom:function(){
    var that=this;
    // wx.showLoading({
    //   title:"玩命加载中"
    // });
    that.setData({
      isLoading:true
    })
    var pageNum=that.data.page;
    wx.request({
      url:"http://app.qitong.shop/appapi/frontpage/picture",
      method:"get",
      data: { page:pageNum},
      success:function(res){
        var m_list = that.data.interst_list;
        var s=m_list.concat(res.data.data.cnxh.favor_goods);
        that.setData({
          interst_list: s
        })
        if (res.data.data.cnxh.favor_goods.length==0){
          that.setData({
            isLoading: false,
            isMore:true
          })
        }  
      }
    })
    pageNum++;
    that.setData({
      page: pageNum
    }) 
  },
  hot:function(){
    wx.navigateTo({
      url:"/pages/hot_new/hot_new"
    })
  },
  hot_click: function () { 
    wx.navigateTo({
      url: "/pages/hot_goods/hot_goods"
    })
    // app.jumps('/pages/hot_goods / hot_goods');
  },
  team_buy:function(){
    wx.navigateTo({
      url: "/pages/buy_team/buy_team"
    })
  },
  free_time:function(){
    wx.navigateTo({
      url: "/pages/free_ontime/free_ontime"
    })

  },
  sdsc: function () {
    wx.navigateTo({
      url: "/pages/four_shop/four_shop"
    })

  },
  buy_free: function () {
    wx.navigateTo({
      url: "/pages/buy_ontime/buy_ontime"
    })

  },
  onLoad:function(){
    var page=this;
    var that=this;
    wx.request({
      url:"http://app.qitong.shop/appapi/frontpage/picture",
      data:{page:1},
      success:function(res){
        if (res.data.code==0){
          var sf = res.data.data.module;
          sf[1].url="/pages/point_shop/point_shop";
          sf[2].url = "/pages/near_shop/near_shop";
          sf[4].url="/pages/day_new/day_new";
          sf[3].url = "/pages/qt_only/qt_only";
          that.setData({
            banner_list: res.data.data.casous,
            mainList_index:sf,
            interst_list:res.data.data.cnxh.favor_goods
          })
        }
        var datas=that.data.interst_list;
        for(var i=0;i<datas.length;i++){
          datas[i].url="/pages/goods_detail/goods_detail"
        }
        that.setData({
          interst_list: datas
        })
      }
    });
    
    wx.getLocation({
      success:(res)=>{
        wx.request({
          url:'https://api.map.baidu.com/geocoder/v2/?ak=emj6ngpcvWkdLh9WAcOW4cIEsTWvDxGW&location=' + res.latitude + ',' + res.longitude + '&output=json',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            // success    
            // console.log(res);
            var city = res.data.result.addressComponent.city;
            page.setData({
              location:city
            });
          },
          fail: function (res) {
            console.log("获取失败");
          }
        })
      }
    })
  }
 
})