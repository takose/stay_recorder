$(function () {
  var promisedSendMessage = function(method) {
    return new Promise(function(resolve) {
      chrome.runtime.sendMessage({ method: method }, function(response) {
        resolve(response);
      });
    });
  };

  Promise.all([
    promisedSendMessage('get_callback_url'),
    promisedSendMessage('get_name'),
  ])
    .then(function(v) {
      $.ajax({
        url: v[0].data,
        type: 'post',
        data: JSON.stringify({
          'status': 'enter',
          'name': v[1].data,
        }),
        success: function (data) {
          console.log(data)
        }
      });
    });
});
