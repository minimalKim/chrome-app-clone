const TODOS_KEY = "todos";

const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
  console.log(savedToDos, toDos)
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  li.remove(); // li.outerHTML = "";
  saveToDos();
}

function paintToDo(obj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.id = obj.id
  span.innerText = obj.text;
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  btn.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  event.preventDefault();
  toDoInput.value = "";
  toDos.push(newToDoObj);
  saveToDos();
  paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;  
  parsedTodos.forEach(paintToDo);
}



