const buttomEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".ul");
const btnDeleteAllEl = document.querySelector(".btn-delete-all");
const btnDeleteSelectedEl = document.querySelector(".btn-delete-selected");
const btnDeselectAllEl = document.querySelector(".btn-deselect-all")

function addToList() {
    if (inputEl.value == "") {
        return;
    }
    const text = inputEl.value;
    ulEl.insertAdjacentHTML("beforeend", `<li class="li"><span class="span">${text}</span></li>`);
    inputEl.value = '';
}

buttomEl.addEventListener("click", addToList);

btnDeleteAllEl.addEventListener("click", function () {
    const liEls = document.querySelectorAll(".li");
    liEls.forEach(li => {
        li.remove();
    })

});

ulEl.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
    }
});

const workOnSelected = validator => {
    const selectedClassEl = document.querySelectorAll(".selected");
    selectedClassEl.forEach(li => {
        if (validator) {
            li.remove();
        } else {
            li.classList.remove("selected");
        }
    })
}

btnDeleteSelectedEl.addEventListener("click", function () {
    workOnSelected(true);
});

btnDeselectAllEl.addEventListener("click", function () {
    workOnSelected(false);
});