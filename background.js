document.addEventListener('DOMContentLoaded', function () {

  
  // var breakFree = document.getElementById('myonoffswitch');

  // on click
  // breakFree.addEventListener('change', function() {

  // // to open a new tab at specific url
  // chrome.tabs.create({active: true, url: 'http://www.google.com'}, null)
  // })
  var randomURL = ['https://www.reddit.com/r/programming/', 
  'https://www.reddit.com/r/coding', 
  'https://www.reddit.com/r/compsci',
  'https://www.reddit.com/r/startups', 
  'https://www.reddit.com/r/javascript',
  'https://www.reddit.com/r/Database/',
  'https://www.reddit.com/r/hacking',
  'https://www.reddit.com/r/cscareerquestions',
  'https://www.reddit.com/r/dailyprogrammer',
  'https://www.reddit.com/r/Python/',
  'https://www.reddit.com/r/machinelearning'
  ];

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var newURL = randomURL[Math.floor(Math.random() * 11)];
    if (changeInfo.url === "https://www.reddit.com/" ) {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "https://www.facebook.com/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "https://www.instagram.com/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "https://www.imgur.com/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "https://twitter.com/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "https://www.twitch.tv/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "https://www.youtube.com/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    } else if (changeInfo.url === "http://slickdeals.net/") {
      chrome.tabs.update(null, {active: true, url: newURL}, null);
    }
  }); 

})

  // chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  //   var url = tabs[0].url;
  //   console.log(url);
  //   if (url === 'https://www.reddit.com') {
  //     chrome.tabs.create({active: true, url: 'http://www.google.com'}, null)
  //     }
  //   });
