const inputEl = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn-submit");
const modalEl = document.querySelector(".modal");
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

    if (birthDate > today) {
        modalEl.style.display = "flex";
        pEl.textContent = "The entered date of birth is greater than the current date.";
        return;
    }


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
    //dar khroji 0 chap nakonad
    let result = '';
    {
        if (years > 0) {
            result += `${years} years`;
        } if (months > 0) {
            result += ` ${months} months`;
        } if (days > 0) {
            result += ` ${days} days`;
        }
    }
    modalEl.style.display = "flex";
    pEl.textContent = result;
}

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    birthCalculator();
})

btnClose.addEventListener("click", function () {
    modalEl.style.display = "none";
})

window.addEventListener("click", function (e) {
    if(e.target === modalEl) modalEl.style.display = "none";
})