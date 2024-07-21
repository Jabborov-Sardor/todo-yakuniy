const elInput1 = document.querySelector("#inp1");
const elWrapper = document.querySelector("#result");
const elBtn = document.querySelector("#btn");
const todos = [];
elBtn.addEventListener("click", (evt) => {
  createTodo();
  const newTodo = { name: elInput1.value };
  todos.push(newTodo);
  console.log(todos);
});

function createTodo() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("new");
  const elInps = document.createElement("p");
  elInps.textContent = elInput1.value;
  const imgg = document.createElement("img");
  imgg.src = "img/img1.jpg";
  newDiv.append(elInps);
  newDiv.append(imgg);
  elWrapper.appendChild(newDiv);
}

document.querySelector("#clear").onclick = function () {
  elInput1.value = "";
  elWrapper.innerHTML = "";
};
