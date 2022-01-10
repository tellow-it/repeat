var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/web.png') {
      myImage.setAttribute ('src','img/web1.png');
    } else {
      myImage.setAttribute ('src','img/web.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Web is cool, ' + myName;
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Web is cool, ' + storedName;
  }
}

myButton.onclick = function() {setUserName();}