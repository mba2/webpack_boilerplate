import "../styles/module_test.css";
import "../styles/module_test.scss";


console.log("First Line of module_test.js file");


document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.createElement("h1");
        h1.innerText = "WEBPACK BOILERPLATE";

    let h2 = document.createElement("h2");
        h2.innerText = "via module_test.js";

    document.body.appendChild(h1);
    document.body.appendChild(h2);
});
