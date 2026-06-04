let deletebuttons = document.querySelector(".todo-items"); 

deletebuttons.addEventListener("click", function (event) {
    let redbutton = event.target.closest(".todo-item");
    redbutton.remove(); 
});

const addButton = document.getElementById("button");
const input = document.getElementById("input");
const todoItems = document.querySelector(".todo-items");

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text.length === 0) return;

  const item = document.createElement("div");
  item.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textEl = document.createElement("p");
  textEl.textContent = text;

  const deleteEl = document.createElement("span");
  deleteEl.className = "delete";
  deleteEl.textContent = "X";

  item.appendChild(checkbox);
  item.appendChild(textEl);
  item.appendChild(deleteEl);

  todoItems.appendChild(item);
  input.value = "";
});

const navlinks = document.querySelectorAll(".wrapper-box a"); 

for (let j = 0; j < navlinks.length; j++) {

    navlinks[j].addEventListener("click", () => {

        for (let k = 0; k < navlinks.length; k++) {
            navlinks[k].classList.remove("active-link"); 
        }

        navlinks[j].classList.add("active-link"); 

    })

}

const heute = new Date();

document.querySelector(".day").textContent =
  heute.toLocaleDateString("en-US", { weekday: "long" });

document.querySelector(".date").textContent =
  heute.toLocaleDateString("de-DE");
