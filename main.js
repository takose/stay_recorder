$(function () {
  var callback_url;
  chrome.runtime.sendMessage({method: "get_callback_url"}, function(response) {
    callback_url = response.data;
  });
  window.onload = function(){
    $.ajax({
      url: callback_url,
      type: 'post',
      data: JSON.stringify({
        'status': 'enter',
      }),
      success: function (data) {
        console.log(data)
      }
    });
  };
});

