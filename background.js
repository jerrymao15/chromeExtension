document.addEventListener('DOMContentLoaded', function () {

  
  // var breakFree = document.getElementById('myonoffswitch');

  // on click
  // breakFree.addEventListener('change', function() {

  // // to open a new tab at specific url
  // chrome.tabs.create({active: true, url: 'http://www.google.com'}, null)
  // })

  // chrome.extension.getViews
  var randomURL = ['/r/programming/', 
  '/r/coding/', 
  '/r/compsci/',
  '/r/startups/', 
  '/r/javascript/',
  '/r/Database/',
  '/r/hacking',
  '/r/cscareerquestions',
  '/r/dailyprogrammer',
  '/r/Python/',
  '/r/machinelearning'
  ];
  const redditDomain = 'http://www.reddit.com'

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var newURL = randomURL[Math.floor(Math.random() * randomURL.length)];

    for (let i = 0; i < randomURL.length; i++) {
      if (changeInfo.url.indexOf(randomURL[i] === -1)) {
        chrome.tabs.update(null, {active: true, url: newURL}, null);
      }
    }    

    if (changeInfo.url.indexOf("www.reddit.com/") !== -1) {
      // for (let i = 0; i < randomURL.length; i++) {
      //   if (changeInfo.url.indexOf(randomURL[i] === -1)) {
      //     chrome.tabs.update(null, {active: true, url: newURL}, null);
      //   }
      // }    
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "https://www.facebook.com/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "https://www.instagram.com/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "https://www.imgur.com/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "https://twitter.com/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "https://www.twitch.tv/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "https://www.youtube.com/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
    } else if (changeInfo.url === "http://slickdeals.net/") {
      chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
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
