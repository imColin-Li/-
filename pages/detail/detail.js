var WxParse = require('../../wxParse/wxParse.js');
var Util = require('../../utils/util.js');
var url=' ';
var article_id = ''
var myComment = ''
Page({
  data: {
    artical:" "
  },
  onTextChanged: function (e) {
    myComment = e.detail.value
  },
  
  onLoad: function (options) {
    var that = this
    console.log(options.url)
   console.log(url)
    //请求文章详情
    wx.request({
      url: options.url,
     
      method: 'GET',
      success: function (res) {
        console.log(res),
        that.setData({
          article: res.data

        });
        WxParse.wxParse('article', 'html', this.data.article,  5);
      }
    })
    this.loadComments()
  }
  
})