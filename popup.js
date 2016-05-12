// const allowedSubreddits = ['www.reddit.com/r/programming', 'www.reddit.com/r/programming', 'www.reddit.com/r/programming', 'www.reddit.com/r/programming'];


// // chrome.webRequest.onBeforeRequest.addListener(function(e) {
// //   console.log(e.url)
// //   for (let i = 0; i < allowedSubreddits.length; i++) {
// //     if (!(e.url.indexOf(allowedSubreddits[i]))) {
// //       let randomSubreddit = Math.floor(Math.random()*4);
// //       return {redirectUrl: allowedSubreddits[randomSubreddit]};
// //     }
// //   }
  
// // }, 
// //   {urls: ['*://www.reddit.com/*', '*://reddit.com/*']}, 
// //   ['blocking'])

// chrome.tabs.onUpdated.addListener(function(e) {
//   for (let i = 0, i < allowedSubreddits.length; i++) {
//     if (e.url.includes(allowedSubreddits[u]) && e.url.includes('reddit.com')) {
//         chrome.tabs.update(null, {active:true, url: allowedSubreddits[0]}, null)
//     }
//   }
// })
