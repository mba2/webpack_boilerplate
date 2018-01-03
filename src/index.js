// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}


console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

if (process.env.NODE_ENV !== 'development') {
    console.log('Looks like we are in production mode!');
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