
var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

if (navToggle) {
    navToggle.addEventListener("click", function () {
        mainNav.classList.toggle("main-nav--opened");
        mainNav.classList.toggle("main-nav--closed");
    })
};
document.getElementById("btn").onclick = btnHandler;

function btnHandler() {
    let f = document.forms[0];
    let str = "";
    if (validate(f)) {
        let formdata = new FormData(f);
        for (let e of formdata.entries())
            str += `${e[0]}: ${e[1]}\n`;
        alert(str);
    }
}

function validate(form) {
    let result = true,
        str;
    for (let item of form.elements)
        if (!item.validity.valid) {
            if (item.validity.patternMismatch)
                str = `${item.id}: ${item.validationMessage} ${item.pattern}`
            else
                str = `${item.id}: ${item.validationMessage}`;
            result = false;
            alert(str);
            break;
        }
    return result
}

