const inputEl = document.querySelector(".input");
const selectFromEl = document.querySelector(".from");
const selectToEl = document.querySelector(".to");
const btnSubmitEl = document.querySelector(".btn-submit");
const selectedFromEl = document.querySelector(".from [selected]");
const selectedToEl = document.querySelector(".to [selected]");


const intOrDecimal = number => {
    const decimalPart = number.toString().split(".")[1];

    if (!decimalPart) {
        return number.toString();
    } else if (decimalPart.length === 1) {
        return number.toFixed(1);
    } else {
        return number.toFixed(2);
    }
}

btnSubmitEl.addEventListener("click", function () {
    event.preventDefault();
    if (selectFromEl != selectedFromEl.value && selectToEl != selectedToEl && !isNaN(inputEl.value) && inputEl.value!=="") {
        const text = inputEl.value;
        const textAsNumber = +text;
        let result;
        if (selectFromEl.value === "Fahrenheit" && selectToEl.value === "Celseus") {
            result = (textAsNumber - 32) * 5 / 9;
        } else if (selectFromEl.value === "Fahrenheit" && selectToEl.value === "Kelvin") {
            result = (textAsNumber - 32) * 5 / 9 + 273.15;
        } else if (selectFromEl.value === "Celseus" && selectToEl.value === "Fahrenheit") {
            result = (textAsNumber * 9 / 5) + 32;
            console.log(result);

        } else if (selectFromEl.value === "Celseus" && selectToEl.value === "Kelvin") {
            result = textAsNumber + 273.15;
        } else if (selectFromEl.value === "Kelvin" && selectToEl.value === "Fahrenheit") {
            result = (textAsNumber - 273.15) * 9 / 5 + 32;
        } else if (selectFromEl.value === "Kelvin" && selectToEl.value === "Celseus") {
            result = textAsNumber - 273.15;
        } else {
            return;
        }
        const res = intOrDecimal(result);
        deleteSelected("both");
        if (!document.querySelector(".result")) {
            const pEl = document.createElement("p");
            pEl.innerText = `${text} ${selectFromEl.value} is ${res} ${selectToEl.value}`;
            pEl.classList.add("result");
            document.querySelector(".container").appendChild(pEl);
        } else {
            const pEl = document.querySelector(".result");
            pEl.innerText = `${text} ${selectFromEl.value} is ${res} ${selectToEl.value}`;
        }
    }
});

function deleteSelected(valid) {
    if (valid === "both") {
        selectedFromEl.remove();
        selectedToEl.remove();
    } else if (valid === "from") {
        selectedFromEl.remove();
    } else {
        selectedToEl.remove();
    }
};

selectFromEl.addEventListener("change", function () {
    deleteSelected("from");
});

selectToEl.addEventListener("change", function () {
    deleteSelected("to");
});