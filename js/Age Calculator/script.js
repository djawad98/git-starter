const inputEl = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn-submit");
const divEl = document.querySelector(".div");
const pEl = document.querySelector(".result");
const btnClose = document.querySelector(".btn-close");
const bodyEl = document.body;


const birthCalculator = () => {
    const birthInput = inputEl.value;
    if (!birthInput) return;
    //khandan tarikh tavalod karbar az input
    const birthDate = new Date(birthInput);
    //greftan tarikh emroz
    const today = new Date();

    //mohasebe ekhtelaf sal motevaled ba emroz
    let years = today.getFullYear() - birthDate.getFullYear();
    //mohasebe ekhtelaf mah motevaled ba emroz
    let months = today.getMonth() - birthDate.getMonth();
    //mohasebe ekhtelaf rooz motevaled ba emroz
    let days = today.getDate() - birthDate.getDate();

    //agar roz tavalodesh nareside az mah yeki kam kon
    if (days < 0) {
        months--;
        //hala yek taghvim az mah jari misazim ba in tafavot roz in tarikh akharin roz mah ghable
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        //har chand rozi ke monde bashe be tavalod az roz mah ghabli kam mikone ta roz bedast biad
        days += prevMonth.getDate();
    }
    //age mah tavalodesh nareside az sal yeki kam kon va meghdaresho dar mah jobran kon
    if (months < 0) {
        years--;
        months += 12;
    }

    divEl.classList.add("container-result");
    bodyEl.classList.add("body");
    if (years === 0) {
        pEl.textContent = `${months} month ${days} day`;
    } else if (months === 0) {
        pEl.textContent = `${years} year ${days} day`;
    } else if (days === 0) {
        pEl.textContent = `${years} year ${months} month`;
    } else {
        pEl.textContent = `${years} year ${months} month ${days} day`;
    }
}

btnSubmit.addEventListener("click", function () {
    birthCalculator();
})

btnClose.addEventListener("click", function () {
    divEl.classList.remove("container-result");
    bodyEl.classList.remove("body");
})