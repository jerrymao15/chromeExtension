



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


  let disallowedSites = ["reddit.com/", "facebook.com/", "imgur.com/", "twitter.com/", "twitch.tv/", "youtube.com/", "slickdeals.net/",]

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(changeInfo.url);
    var newURL = randomURL[Math.floor(Math.random() * randomURL.length)];

    let beingLazy = true;
    for (let i = 0; i < randomURL.length; i++) {
      if (changeInfo.url.includes(randomURL[i])) {
        beingLazy = false;
      }
    }    

    if (beingLazy) {
      disallowedSites.forEach(no => {
        if (changeInfo.url.includes(no)) {
          chrome.tabs.update(null, {active: true, url: redditDomain + newURL}, null);
        }
      })
    }
  }); 

})