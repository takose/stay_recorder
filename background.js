chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  callback_url = localStorage.getItem('callback_url');
  name = localStorage.getItem('name');
  event_name = request.method;
  if (request.method == "entered" || request.method == "left"){
    sendResponse({data: 'succeed'});
    $.ajax({
      url: callback_url,
      type: 'post',
      data: JSON.stringify({
        'event_name': event_name,
        'name': name,
      }),
      success: function (data) {
        console.log(data)
      }
    });
  } else {
    sendResponse({data: "error: undefined method"});
  }
});
