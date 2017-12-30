// HOT MODULE ACCEPTION WHEN LOADERS DON'T DO THAT
if (module.hot) {
	module.hot.accept();
}

/** ALL MODULES ARE IMPORTED HERE 
 * JS AND STYLES!!
*/ 
import "./blocks/index.scss";
import "./blocks/user-area/user-area";

console.log("index first code");

// // MODEL
// let model = {
//   /** STATE INFO */
//   "states" : {
//     "userInfo": false
//   },
//   "loadedModules" : [],
//   "failedModules" : [],
//   /** STATE INFO */

//   "user" : {},

//   /**
//    * FUNCTIONS THAT MUST BE CALLED TO LOAD THE APP DATA 
//   */
//   loadUserInfo : function(userId) {
//     if(typeof userId === "undefined") {
//       throw new Error("Please, pass a valid 'id'");
//       return false;
//     }

//     let self = this;
//     fetch('http://mariobrusarosco.com/code-editor/test-support/fake-data.json')
//       .then( (response) => { 
//         if(response.status !== 200) console.error("error ==> ", response.status)
        
//         response.json().then( data => {     
//           model.user = data["users"][userId];      /** Store the returned data into the model object */          
//           model.states.userInfo = true; /** Set the model state for 'User Info' as 'Loaded' */
//         });
//     });
//   },

//   /**
//    * Check each model's states... only if all of them are fully loaded...
//    * remove the page's loader     * 
//   */
//   loaderChecker : function() {
//     const self = this;                                               /** Store the Object reference for future use */   
//     if(!this.loaderChecker.counter) this.loaderChecker.counter = 0;  /** Set a counter into this function */

//     this.failedModules = this.failedModules = [];                    /** Clears the arrays that store the model's modules to perform a new verification */ 
    
//     for (const state in model.states) {
//       if(!model.states[state]) this.failedModules.push(state);    // Defines which modules are fully loaded
//       else this.loadedModules.push(state);                        // Defines which modules aren't fully loaded 
//     }

//     /** If all modules are fully loaded ... terminates the verification process */
//     if(!this.failedModules.length) {
//       // console.log("Everything were loaded!");
//       controller.removeMainLoader();
//       return true;
//     }
//     /* If after 20 verifications any module still pending... stop the verifications
//     *  and consider this scenario as a critical error...
//     */
//     else if(++this.loaderChecker.counter === 5) {
//       console.warn("Some essential data couldn't be loaded");
//       return false;
//     }
//     /** Otherwise...execute another verification */
//     setTimeout(() => self.loaderChecker() , 1500);
//   },

//   init : function() {
//     this.loaderChecker();
//     this.loadUserInfo(0);
//   }
// };
// // CONTROLLER
// let controller = {

//   removeMainLoader : () => {
//     const el = document.querySelector(".js_loader-main");
//       el.parentNode.removeChild(el);
//   },

//   getUsername : function(){
//     model.user.test;
//     console.log("test",model.user.test);
//   }, 
        
//   init : function() {
//     model.init();
//     // view.init();
//   }
// };
// // VIEWS
// let view = {
//     cacheElements : function() {
//         this.navbar_wrapper = document.querySelector(".app-navbar__wrapper");
//     },
    
//     mountUserArea : function() {
//         const mainEl = document.createElement("div");
//             mainEl.classList.add("user-area");

//         const userName = document.createElement("div");
//             userName.classList.add("user-area__name");
//             userName.textContent = controller.getUsername();

//         mainEl.appendChild(userName);
//         this.navbar_wrapper.appendChild(mainEl);
//     },
    
    
//     render : function() {

//     },    
    
//     init : function() {
//         this.cacheElements();
//         this.mountUserArea();
//     }
// };


window.addEventListener('DOMContentLoaded', () => {
    // controller.init();
    console.log("Jeeeeessse");
});