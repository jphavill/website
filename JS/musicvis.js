// the current frame of the my music tastes throughout the years
var musicvisCount = 682;

// decrements the frame of the music visualizor, which advances through time, and displays the new image.
function advanceImage() {
  if (musicvisCount > 0){
    var image = document.getElementById("musicvisChart");
    image.src = "images/musicvisFrames/musicvisFrame" + --musicvisCount + ".jpg"
  }
}

//increments the frame of the music visualizor, which retreats through time, and displays the new image.
function retreatImage() {
  if (musicvisCount < 682){
    var image = document.getElementById("musicvisChart");
    image.src = "images/musicvisFrames/musicvisFrame" + ++musicvisCount + ".jpg"
  }
}

//swaps picture to music vis gif
function playMusicVis(){
  var image = document.getElementById("musicvisChart");
  image.src = "images/musicvis.gif";
}

//swaps music vis gif back to picture
function stopMusicVis(){
  var image = document.getElementById("musicvisChart");
  image.src = "images/musicvisFrames/musicvisFrame0.jpg";
}

//creates a button with the associated inner html, parent, class and id if passed
function createButton(func, parentIdentifier, textContent, className, id){
  var tempButton = document.createElement("button");

  // sets all passed attributes
  var params = [className, id];
  var attributes = ["className", "id"];
  for (i=0; i<params.length; i++){
    if (params[i] !== null){
      tempButton.setAttribute(attributes[i], params[i]);
      console.log(attributes[i] + "   " +params[i]);
    }
  }

  //sets the text of the button
  tempButton.textContent = textContent;

  // sets the parent of the button, checking if it is an id, name, class and finally an element type. defaults to body
  var parent = findElement(parentIdentifier);
  if (parent == null){
    parent = document.getElementsByTagName("body")[0];
  }
  parent.appendChild(tempButton);
  tempButton.addEventListener("click", func);
  return tempButton;
}

function findElement(identifier){
  // returns the element using the identifier checking if it is an id, name, class and finally an element type.
  var element = document.getElementById(identifier);
  if (element == null){
    element = document.getElementsByTagName(identifier)[0];
  }
  if (element == null){
    element = document.getElementsByClassName(identifier)[0];
  }
  if (element == null){
    element = document.getElementsByName(identifier)[0];
  }
  if (element == null){
    element = document.getElementsByTagName(identifier)[0];
  }
  return element;

}
// var backwardButton = createButton(retreatImage, "main", "backward", "musicVisButton", "backwardButton");
// var forwardButton = createButton(advanceImage, "main", "forward", "musicVisButton", "forwardButton");
var stopButton = createButton(stopMusicVis, "main", "stop", "musicVisButton", "stopMusicVisButton");
var playButton = createButton(playMusicVis, "main", "play", "musicVisButton", "playMusicVisButton");

