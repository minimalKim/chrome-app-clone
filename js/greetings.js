const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const logInButton = document.querySelector("#login-form input:last-child");
const greeting = document.getElementById("greeting");
const savedUserName= localStorage.getItem(USERNAME_KEY);

function loginSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}

function paintGreetings(name) {
  const nowHour = new Date().getHours();
  let greetingSentence = '';
  if (5 <= nowHour && nowHour < 10) greetingSentence = 'Good moring';
  else if (10 <= nowHour && nowHour < 17) greetingSentence = 'Good afternoon';
  else if (17 <= nowHour && nowHour < 21) greetingSentence = 'Good evening';
  else if ( 21<= nowHour || nowHour < 5) greetingSentence = 'Good night';
  else greetingSentence = 'Have a good day';

  greeting.innerText = `${greetingSentence},\n${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (!savedUserName) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);

} else {
  paintGreetings(savedUserName);
  //show the greetings
}