// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  radioChange: function(e) {
    console.log(e.detail.value);
    console.log(e.target.dataset.params);
  },
  checkboxChange: function (e) {
    console.log(e.detail.value);
    console.log(e.target.dataset.params);
  },
  fatherTap(e) {
    console.log('father');
  },
  sonTap(e) {
    console.log('son');
    console.log("第"+ e.target.dataset.index + '儿子');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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