const buttomEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".ul");

function addToList() {
    if (inputEl.value == "") {
        return;
    }
    const text = inputEl.value;
    ulEl.insertAdjacentHTML("beforeend", `<li class="li">${text}</li>`);
    inputEl.value = '';
}

buttomEl.addEventListener("click", addToList);