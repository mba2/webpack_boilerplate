// IMPORTS AN SPECIFIC CHUNK OF SASS...
import "../smacss/modules/_module_test.scss";
// IMPORTS AN SPECIFIC IMAGE
import logoImg from "../img/italian_brothers.jpg";


console.log("First Line of module_test.js file");


document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.createElement("h1");
        h1.innerText = "WEBPACK BOILERPLATE";
        h1.classList.add('header');

    let h2 = document.createElement("h2");
        h2.innerText = "via module_test.js";

    let logo = new Image();
        logo.src = logoImg;

    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(logo);
});
