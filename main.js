$(function () {
  var promisedSendMessage = function(method) {
    return new Promise(function(resolve) {
      chrome.runtime.sendMessage({ method: method }, function(response) {
        resolve(response);
      });
    });
  };

  promisedSendMessage('get_callback_url')
    .then(function(v1) {
      return promisedSendMessage('get_name').then(function(v2) {
        return Promise.resolve({ callback_url: v1.data, name: v2.data });
      });
    })
    .then(function(v) {
      console.log(v);
    });
});
