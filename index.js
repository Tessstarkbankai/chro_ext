let myLead = []

const inputEl = document.getElementById("input-el")

const btnw = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-list")

let delEL = document.getElementById("del-btn")

let valueLocal = JSON.parse(localStorage.getItem("myLead"))

if (valueLocal) {
    myLead = valueLocal
    renderClicks();
}

delEL.addEventListener("dblclick", function () {
    localStorage.clear();
    myLead = [];
    renderClicks();
})

btnw.addEventListener("click", function () {
    myLead.push(inputEl.value);

    var getValue = document.getElementById("input-el")
    if (getValue.value != "") {
        getValue.value = ""
    }

    localStorage.setItem("myLead", JSON.stringyfy(myLead))
    renderClicks();
})
function renderClicks() {
    let listitems = ""
    for (let i = 0; i < myLead.length; i++) {
        listitems += "<li>" + myLead[i] + "</li>";
    }
    ulEl.innerHTML = listitems
}



