const allowedSubreddits = ['www.reddit.com/r/programming', 'www.reddit.com/r/programming', 'www.reddit.com/r/programming', 'www.reddit.com/r/programming'];


chrome.webRequest.onBeforeRequest.addListener(function(e) {
  console.log(e.url)
  for (let i = 0; i < allowedSubreddits.length; i++) {
    if (!(e.url.includes(allowedSubreddits[i]))) {
      let randomSubreddit = Math.floor(Math.random()*4);
      return {redirectUrl: allowedSubreddits[randomSubreddit]};
    }
  }
  
}, 
  {urls: ['*://www.reddit.com/*', '*://reddit.com/*', 'https://www.reddit.com'],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]}, 
  ['blocking'])


// chrome.webRequest.onBeforeRequest.addListener(function(e) {
//       return {redirectUrl: 'www.reddit.com'};
  
// }, 
//   {urls: ['*google*'],
//   types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
// }, 
//   ['blocking'])

// document.addEventListener('DOMContentLoaded', function() {

//     chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
//       for (let i = 0, i < allowedSubreddits.length; i++) {
//         // if (!(changeInfo.url.includes(allowedSubreddits[u])) || changeInfo.url === ('*//www.reddit.com/*')) {
//         if (changeInfo.url.includes('reddit')) {
//             chrome.tabs.update(null, {active:true, url: allowedSubreddits[0]}, null)
//         }
//       }
//     })



// })



