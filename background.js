chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "get_callback_url"){
    sendResponse({data: localStorage.getItem('callback_url')});
  } else if (request.method == "get_name"){
    sendResponse({data: localStorage.getItem('name')});
  } else {
    sendResponse({data: "error: undefined method"});
  }
});
