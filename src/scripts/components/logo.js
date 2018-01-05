// MODULE IMPORTED IMAGES

import logoImg from "../../img/italian_brothers.jpg";

// export default () => {
//     console.log("This log is inside the logo.js file");
// }

const logoHeader = document.querySelector('.logo-header');
let img = new Image();
img.src = logoImg;
logoHeader.setAttribute("test", "just an attribute for tests purposes.");

export default logoHeader;