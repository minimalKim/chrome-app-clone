
const FOCUS_KEY = "focus";
const HIDDEN_CLASSNAME_ = "hidden";
const DONE_CLASSNAME = "done"

const focus = document.getElementById("focus");
const focusForm = document.getElementById("focus-form");
const focusInput = document.querySelector("#focus-form input");
const focusMsg = document.getElementById("focus-message");
const savedFocus = localStorage.getItem(FOCUS_KEY);
const focusCb = document.getElementById("focus-cb")
const focusCbForm = document.getElementById("focue-cb-form")

function paintFocus(str) {
  focusMsg.innerHTML = str;
}

function handlefocusSubmit(event) {
  const newFocus = focusInput.value;
  //event.preventDefault();
  focusInput.value = "";
  localStorage.setItem(FOCUS_KEY, newFocus);
  focusForm.classList.add(HIDDEN_CLASSNAME_);
  focusCbForm.classList.remove(HIDDEN_CLASSNAME_);
  paintFocus(newFocus);
}
function checkFocus(event) {
  focusMsg.classList.toggle(DONE_CLASSNAME);
  localStorage.removeItem(FOCUS_KEY);
}

if (!savedFocus) {
  focusForm.classList.remove(HIDDEN_CLASSNAME);
  focusCbForm.classList.add(HIDDEN_CLASSNAME_);
  focusForm.addEventListener("submit", handlefocusSubmit);
} else {
  paintFocus(savedFocus);
  focusCbForm.addEventListener("click",checkFocus)
}