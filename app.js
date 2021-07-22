const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const logInButton = document.querySelector("#login-form input:last-child");
const greeting = document.getElementById("greeting")

const HIDDEN_CLASSNAME = "hidden"



function loginSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${userName}`;
}


loginForm.addEventListener("submit", loginSubmit)
//console.log(userName)