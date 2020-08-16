// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//   alert("I got clicked");
// }


// document.querySelector("button").addEventListener("click",function(){
//   alert("I got clicked");
//   //what to do when detected
// })for one button only



// document.querySelectorAll(".drum").forEach(item=>{
//
//     item.addEventListener("click",function(){
//       alert("I got clicked");
//     })
//
// })
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML;
    KeypressSounds(buttoninnerHTML);
    animations(buttoninnerHTML);

    // console.log (this.style.color="white");
    // alert("I got clicked");
  });
}


document.addEventListener("keypress",function(){

     KeypressSounds(event.key);
     animations(event.key);
   // alert("yeah i was wanting you to click me");

});

function KeypressSounds(key){
  switch (key) {
    case "P":
      var audio = new Audio('sounds/happy-bday-to-you-female-voice-music-1.mp3');
      audio.play();
      break;
    case "R":
      var audio = new Audio('sounds/I wish you happy happy birthday song.mp3');
      audio.play();
      break;
    case "A":
      var audio = new Audio('sounds/happy bithday to you short clip kill dil.mp3');
      audio.play();
      break;
    case "D":
      var audio = new Audio('sounds/I love you bodyguard.mp3');
      audio.play();
      break;
    case "E":
      var audio = new Audio('sounds/Tum Se Hi.mp3');
      audio.play();
      break;
    case "E":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "P":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    default:console.log(innerHTML);

  }
}

/*************************animations******************/
function animations(currentkey){
    var activeButton=document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    },100);
}
