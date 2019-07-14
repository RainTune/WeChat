Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "HelloWorld",
    bannerList: [],
    navList: []
  },
  requestData: (url, type, data,callback) => {
    type = type || 'GET';
    data = data || '';
    wx.request({
      url: url,
      data: data,
      header: {},
      method: type,
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        callback(res);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图数据
    this.requestData('https://locally.uieee.com/slides', 'GET', '', (res) => {
        //注意设置data里面的数据需要使用下面这种方式，不能直接使用this.data.banneList = ***
        this.setData({
          bannerList: res.data
        });
    });
    //获取导航数据
    this.requestData('https://locally.uieee.com/categories', 'GET', '', (res) => {
      //注意设置data里面的数据需要使用下面这种方式，不能直接使用this.data.banneList = ***
      this.setData({
        navList: res.data
      });
    });
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})