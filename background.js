chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  callback_url = localStorage.getItem('callback_url');
  name = localStorage.getItem('name');
  event_name = request.method;
  if (request.method == "entered" || request.method == "left"){
    var params = {
      method: 'POST',
      body: JSON.stringify({
        'event_name': event_name,
        'name': name,
      }),
    };
    console.log(params)
    fetch(callback_url, params)
    .then(function(response){
      console.log(response)
    })

    sendResponse({data: 'succeed'});
  } else {
    sendResponse({data: "error: undefined method"});
  }
});
