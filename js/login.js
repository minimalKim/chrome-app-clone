const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");
const loginInput = document.getElementById("login-input");
const loginName = document.getElementById("login-name");
const logInButton = document.querySelector("#login-form button");
const savedUserName= localStorage.getItem(USERNAME_KEY);


function loginSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, userName);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(userName);
  console.log(userName);
}

function paintGreetings(name) {
  const nowHour = new Date().getHours();
  let message = '';
  if (5 <= nowHour && nowHour < 10) message = 'Good moring';
  else if (10 <= nowHour && nowHour < 17) message = 'Good afternoon';
  else if (17 <= nowHour && nowHour < 21) message = 'Good evening';
  else if ( 21<= nowHour || nowHour < 5) message = 'Good night';
  else message = 'Have a good day';

  loginMessage.children[0].innerText = `${message},`;
  loginName.children[0].innerText = `${name}`;
  loginName.classList.remove(HIDDEN_CLASSNAME); 
}


loginForm.addEventListener("submit", loginSubmit);

/*
if (!savedUserName) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);

} else {
  //show the greetings
  paintGreetings(savedUserName);
  //editNameBtn 클릭 시
  editNameBtn.addEventListener("click", editName)
}*/