// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}


/** ALL MODULES ARE IMPORTED HERE 
 * JS AND STYLES!!
*/ 
import "./styles/index.scss";

import "./components/header";
import "./components/logo";

window.addEventListener('DOMContentLoaded', () => {
    // controller.init();
    console.log("I'm the one who knocks!!!!");
});