// pages/shopList/shopList.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    quantity: 10,
    page:1,
    id:1,
    hasMore: true
  },
  loadMore: function() {
    if(!this.data.hasMore) return;
    wx.showNavigationBarLoading();
    wx.showLoading({
      title: '玩命加载中！！！',
    });
    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.id + '/shops',
      data: {
        _limit: this.data.quantity,
        _page: this.data.page++
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data);
        //在请求头中res.header中的X-Total-Count代表总数量
        //console.log(res.header['X-Total-Count']);
        var newList = this.data.shopList.concat(res.data);
        //判断有无产品列表
        var flag = this.data.page * this.data.quantity < res.header['X-Total-Count'];
        this.setData({
          shopList: newList,
          hasMore: flag
        });
        wx.hideNavigationBarLoading();
        wx.hideLoading();
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //根据首页传递过来的参数，设置导航标题
    if(options.title) {
      wx.setNavigationBarTitle({
        title: options.title
      })
    }
    this.setData({
      id: options.id
    })
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      shopList: [],
      page: 1,
      hasMore: true
    });
    this.loadMore();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})