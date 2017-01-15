$(document).ready(function() {


  var url = 'https://api.instagram.com/v1/users/sceneryoftoday/media/recent/?access_token=2221471904.1677ed0.390e6386b8d040128dc34f2eef901960';

  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
      
      var min = 0;
      var max = json.responseData.feed.entries.length;
      // and the formula is:
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      var str = json.responseData.feed.entries[random].content;

      var regex = /<img.*?src="(.*?)"/;
      var src = regex.exec(str)[1];

      $('#menu').css('background-image','url('+src+')');
      
    }
  });

});