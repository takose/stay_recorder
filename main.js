window.onload = function() {
  chrome.runtime.sendMessage({ method: "entered" });
}
window.onbeforeunload = function() {
  chrome.runtime.sendMessage({ method: "left" });
}
