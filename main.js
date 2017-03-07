$(function () {
  window.onload = function() {
    chrome.runtime.sendMessage({ method: "entered" }, function(response) {
      console.log(response);
    });
  }
  window.onbeforeunload = function() {
    chrome.runtime.sendMessage({ method: "left" }, function(response) {
      console.log(response);
    });
  }
});
