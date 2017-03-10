var restoreAll = function() {
  document.getElementById('callback_url').value = localStorage.getItem('callback_url');
  document.getElementById('user_name').value = localStorage.getItem('user_name');
};

var saveAll = function() {
  localStorage.setItem('callback_url', document.getElementById('callback_url').value)
  localStorage.setItem('user_name', document.getElementById('user_name').value)
};

var init = function() {
  restoreAll();
  document.getElementById('save').addEventListener('click', saveAll);
};

init();
