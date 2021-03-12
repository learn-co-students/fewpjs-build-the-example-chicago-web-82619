// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let articleHearts = document.querySelectorAll(".like");

for(let i = 0; i < articleHearts.length; i++){
  articleHearts[i].innerHTML = "Like! " + EMPTY_HEART;
  articleHearts[i].addEventListener("click",function(){

    if(articleHearts[i].innerHTML == "Like! " + EMPTY_HEART){
      articleHearts[i].innerHTML = "Like! " + FULL_HEART
    } else {
      articleHearts[i].innerHTML = "Like! " + EMPTY_HEART
    }

    mimicServerCall();
  })
}

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
