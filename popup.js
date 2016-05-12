document.addEventListener('DOMContentLoaded', function () {

  var switching = document.getElementById('myonoffswitch');

  switching.addEventListener('click', function() {

  // to open a new tab at specific url
    chrome.tabs.create({active: true, url: 'http://www.google.com'}, function() {

    })
  })

});
