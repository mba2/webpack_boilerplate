// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}


/** ALL MODULES ARE IMPORTED HERE 
 * JS AND STYLES!!
*/ 

// import "./fonts/fonts.css";

import "./blocks/user-area/user-area";
import "./blocks/global/global";


window.addEventListener('DOMContentLoaded', () => {
    // controller.init();
    console.log("I'm the one who knocks!!!!");
});