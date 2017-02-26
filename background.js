chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "get_request_url"){
    sendResponse({data: localStorage.getItem('request_url')});
  } else if (request.method == "get_slack_message"){
    sendresponse({data: localstorage.getItem('slack_message')});
  } else if (request.method == "get_callback_url"){
    sendResponse({data: localStorage.getItem('callback_url')});
  } else {
    sendResponse({data: "error: undefined method"});
  }
});
