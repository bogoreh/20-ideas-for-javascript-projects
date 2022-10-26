const optionButtons = document.querySelectorAll(".optionButton");
const ul = document.querySelector(".list");
const h2 = document.querySelector("h2");
const input = document.querySelector(".add-items");
const items = JSON.parse(localStorage.getItem("items")) || [];

function setToDoViaButton(e) {
  localStorage.setItem("todoname", this.textContent);
  h2.textContent = this.textContent;
}

function setToDoViaText() {
  let headingText = h2.textContent;
  localStorage.setItem("todoname", headingText);
}

function addListItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, ul);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(items, ul) {
  ul.innerHTML = items
    .map((item, i) => {
      return `
    <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      } />
        <label for="item${i}">${item.text}</label>
    </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, ul);
}

optionButtons.forEach((button) =>
  button.addEventListener("click", setToDoViaButton)
);
input.addEventListener("submit", addListItem);
ul.addEventListener("click", toggleDone);
h2.addEventListener("focus", setToDoViaText);
h2.addEventListener("keyup", setToDoViaText);

h2.textContent = localStorage.getItem("todoname", h2.textContent);
populateList(items, ul);
