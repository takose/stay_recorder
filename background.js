chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  callback_url = localStorage.getItem('callback_url');
  user_name = localStorage.getItem('user_name');
  event_name = request.method;
  if (request.method == "entered" || request.method == "left"){
    var params = {
      method: 'POST',
      body: JSON.stringify({
        'event_name': event_name,
        'user_name': user_name,
      }),
    };
    fetch(callback_url, params)
  }
});
