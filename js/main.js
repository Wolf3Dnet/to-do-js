const input = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");
const elements = document.getElementById("elements");

console.log(input);
console.log(btnAdd);
console.log(elements);

btnAdd.addEventListener("click", (e) => {
  if (input.value === "") return;
  createOrDeleteElement(input.value);
  input.value = "";
});

function createOrDeleteElement(value) {
  const li = document.createElement("li");
  const liBtn = document.createElement("button");
  const span = document.createElement("span");
  const liRadio = document.createElement("button");

  li.className = "li";

  span.textContent = value;
  span.className = "span";

  liBtn.textContent = "delete";
  liBtn.className = "btn";

  liRadio.className = "li-radio";

  li.append(liRadio, span, liBtn);
  elements.append(li);

  liBtn.addEventListener("click", (e) => {
    elements.removeChild(li);
  });

  liRadio.addEventListener("click", (e) => {
    li.classList.toggle("li-active");
  });
}
