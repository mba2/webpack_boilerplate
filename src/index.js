// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}


import "./resume";

/** ALL MODULES ARE IMPORTED HERE 
 * JS AND STYLES!!
*/ 

import "./blocks/global/global";
import "./blocks/header/header";

window.addEventListener('DOMContentLoaded', () => {
    // controller.init();
    console.log("I'm the one who knocks!!!!");
});