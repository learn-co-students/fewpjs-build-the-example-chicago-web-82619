// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function main(){
  window.addEventListener('DOMContentLoaded', function(){
    addLikeListener();
  })
}

function addLikeListener() {
  document.addEventListener('click', (event) => {
    // console.log(event.target)
    if (event.target.className === 'like-glyph') {
      mimicServerCall()
      .then(success => {turnHeartRed(event.target)})
      .catch(error => {catchError()})
    } else if (event.target.className === 'like-glyph activated-heart') {
      mimicServerCall()
      .then(success => {emptyHeart(event.target)})
      .catch(error => {catchError()})
    }
  });
}

function catchError (){
  const errorMessage = document.getElementById('modal')
  errorMessage.classList.toggle('hidden')
  setTimeout(() => errorMessage.classList.toggle('hidden'), 5000)
}

function turnHeartRed(target) {
  const heartIcon = target
  heartIcon.classList.toggle('activated-heart')
  heartIcon.innerHTML = FULL_HEART
}
function emptyHeart(target) {
  const heartIcon = target
  heartIcon.classList.toggle('activated-heart')
  heartIcon.innerHTML = EMPTY_HEART
}
// mimicServerCall()



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

main()
