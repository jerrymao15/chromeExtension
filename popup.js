document.addEventListener('DOMContentLoaded', function () {

  var switching = document.getElementById('myonoffswitch');
  var arrayOfChallenges = [
  'Thank someone for something good that they did in your life', 
  'Write your full name using the hand you don\'t usually use.',
  'Listen to a TED Talk', 
  'Write a story 2 paragraphs long involving a cave, recursion, and Hello Kitty.',
  'Pick a topic you\'re passionate about. Write a speech and record yourself reading it.',
  'Buy and read a newspaper at a cafe',
  'Get active! Balance a book on your head for 6 seconds. Too easy? Walk outside with it.',
  'Travel to a place beginning with the letter p. Take a selfie nearby.',
  'Be lectured. Learn a topic from Khan Academy. Then teach it to someone else.',
  'Bring a pen and paper, visit the nearest bar, and draw the scene.',
  'Find a new animal species outdoors. Look it up on wikipedia.', 
  'Strike up a conversation the next time you\'re taking public transportation.',
  'Find something that makes you smile. Photograph it.',
  'Film a 4-minute movie on your phone about Justin Bieber.'
  ]

  switching.addEventListener('click', function() {
    // document.getElementsByTagName('BODY').style.height = 500px;
    // to open a new tab at specific url
      // chrome.tabs.create({active: true, url: 'http://www.google.com'}, function() {
      // })

    // if button is switched back to 'no', nothing happens
    if (!switching.checked) {
      document.getElementById('dailyChallenge').hide() = '';
    }
    // adding a daily challenge to the tooltip
    var newChallenge = arrayOfChallenges[Math.floor(Math.random() * 14)];
    document.getElementById('dailyChallenge').innerHTML = newChallenge;

  })

});
