const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.children[0].innerHTML = `${hours}:${minutes}`;
  clock.children[1].innerHTML = ` ${seconds}`;
}

getClock();
setInterval(getClock, 1000);
