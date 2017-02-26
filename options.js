(function() {
  var restoreAll = function() {
    document.getElementById('callback_url').value = localStorage.getItem('callback_url');
  };

  var saveAll = function() {
    localStorage.setItem('callback_url', document.getElementById('callback_url').value)
  };

  var init = function() {
    restoreAll();
    document.getElementById('save').addEventListener('click', saveAll);
  };

  init();

})();
