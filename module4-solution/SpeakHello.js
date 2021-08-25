(function (window) {
  
var helloSpeaker = {};
helloSpeaker.speak = {};
var speakWord = "Hello";

helloSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}

window.helloSpeaker = helloSpeaker;

})(window);
