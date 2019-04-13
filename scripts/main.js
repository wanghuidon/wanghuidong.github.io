let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sloth.jpg') {
      myImage.setAttribute('src', 'images/sloth2.jpg');
    } else {
      myImage.setAttribute('src', 'images/sloth.jpg');
    }
}

function setHeading(name) {
	let myHeading = document.querySelector('h1');
	myHeading.textContent = 'Sloth ' + name + '!';
}

function setUserName() {
	let myName = prompt('请输入你的名字');
	localStorage.setItem('name', myName);
	setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
	setUserName();
} else {
	setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;