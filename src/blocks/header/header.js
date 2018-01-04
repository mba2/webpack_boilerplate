import "./header.scss";

// USING SYSTEM.IMPORT
const btn = document.querySelector(".user-area__sign-up");
btn.onclick = () => {
    System.import('../user-area/user-area')
    .then(module => {
        module.default();
    });
}

/* USING DYNAMIC IMPORT
* IMPORTANT!!!! 
    ===> WHEN USING THIS APPROACH, YOU NEED TO INSTALL
        A MODULE NAMED "babel-plugin-dynamic-import-webpack"
    
    ===> THAN YOU NEED TO ADD A PROPERTY INTO THE BABEL OBJECT
        CALLED "plugins" WITH THE VALUE OF ["dynamic-import-webpack"]
        E.G:
            {
                "presets": [
                    "babel-preset-env"
                ],
                "plugins": ["dynamic-import-webpack"]
            }
*/
// const btn = document.querySelector(".user-area__sign-in");
// // Note that because a network request is involved, some indication
// // of loading would need to be shown in a production-level site/app.
// btn.onclick = e => import(/* webpackChunkName: "../dynamic_import_01/dynamic_import_01" */ '../dynamic_import_01/dynamic_import_01').then(module => {
//   console.log("sign in");
//   var print = module.default;
//   print();
// });