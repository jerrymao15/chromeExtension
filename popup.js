document.addEventListener('DOMContentLoaded', function () {
  // var redditBlock = document.getElementById('blockButton')

  // // on click
  // redditBlock.addEventListener('click', function() {

  //   // to open a new tab at specific url
  //   chrome.tabs.create({active: true, url: 'http://www.google.com'}, null)

    chrome.webRequest.onBeforeRequest.addListener(function(e) {
      console.log(e.url);
      console.log(urlContains(e.url(), 'www.reddit.com'))
      console.log(urlContains(e.url,'www.reddit.com/r/programming' ))
      console.log(queryContains(e.url(), 'www.reddit.com'))
      // if (hasHostSuffix(e.url)) {
      //   let randomSubreddit = Math.floor(Math.random()*4);
      //   return {redirectUrl: allowedSubreddits[randomSubreddit]}
    }, {urls: ['*://www.reddit.com/*']}, ['blocking'])
})
