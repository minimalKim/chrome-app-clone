const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input:nth-child(2)");
const logInButton = document.querySelector("#login-form input:last-child");
const greeting = document.getElementById("greeting");
const grettingMessage = document.getElementById("greeting-message");
const greetingName = document.getElementById("greeting-name");
const savedUserName= localStorage.getItem(USERNAME_KEY);
const logoutBtn = document.getElementById("logout-btn");


function loginSubmit(event) {
  const userName = loginInput.value;
  console.log(userName);
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //아래없으면 로그아웃 안눌림...
  //window.location.reload();
  paintGreetings(userName);
}

function paintGreetings(name) {
  const nowHour = new Date().getHours();
  let message = '';
  if (5 <= nowHour && nowHour < 10) message = 'Good moring';
  else if (10 <= nowHour && nowHour < 17) message = 'Good afternoon';
  else if (17 <= nowHour && nowHour < 21) message = 'Good evening';
  else if ( 21<= nowHour || nowHour < 5) message = 'Good night';
  else message = 'Have a good day';

  grettingMessage.innerText = `${message},`;
  greetingName.innerText = `${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


function logout() {  
  greetingName.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);   
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}




if (!savedUserName) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
  logoutBtn.addEventListener("click", logout)

} else {
  //show the greetings
  paintGreetings(savedUserName);
  logoutBtn.addEventListener("click", logout)
}