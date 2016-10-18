var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test_image.jpg') {
      myImage.setAttribute ('src','images/test_image2.jpg');
    } else {
      myImage.setAttribute ('src','images/test_image.jpg');
    }
}
// setting up a clicable button to input user name
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Coding is Awesome, ' + myName;
}
//setting up to check if we have name if not prompts for Name
if(!localStorage.getItem('name')) {
	setUserName();
} 	else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Coding is awesome, ' +storedName;
}

myButton.onclick = function() {
  setUserName();
}
