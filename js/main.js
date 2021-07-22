const input = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");
const elements = document.getElementById("elements");

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

  const liInput = document.createElement("textarea");
  const liInputAdd = document.createElement("button");
  const liInputUndo = document.createElement("button");

  liInputAdd.className = "li-input-add";
  liInputAdd.textContent = "+";

  liInputUndo.className = "li-input-undo";
  liInputUndo.textContent = "-";

  liInput.className = "li-input";
  liInput.value = input.value;

  li.className = "li";

  span.textContent = value;
  span.className = "span";

  liBtn.textContent = "delete";
  liBtn.className = "btn";

  liRadio.className = "li-radio";

  li.append(liRadio, span, liBtn, liInputAdd, liInputUndo, liInput);
  elements.append(li);

  liBtn.addEventListener("click", (e) => {
    elements.removeChild(li);
  });

  liRadio.addEventListener("click", (e) => {
    li.classList.toggle("li-active");
  });

  span.addEventListener("click", (e) => {
    li.classList.add("li-change");
    liRadio.setAttribute("disabled", true);
  });

  liInputAdd.addEventListener("click", (e) => {
    span.textContent = liInput.value;
    liRadio.removeAttribute("disabled", false);
    li.classList.remove("li-change");
  });

  liInputUndo.addEventListener("click", (e) => {
    liRadio.removeAttribute("disabled", false);
    liInput.value = span.textContent;
    li.classList.remove("li-change");
  });
}
