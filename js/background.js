const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector('body')
//body['background-image'] = `url(./img/${chosenImage})`;
body.style['backgroundImage'] = `url(./img/${chosenImage})`;
/*
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage); */