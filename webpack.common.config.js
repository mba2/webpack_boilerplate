/** ALL INFORMATION ABOUT VENDOR ASSETS ARE DEFINED IN THIS FILE */ 
const VENDOR = require('./src/vendor/vendor-libs');


module.exports = {
    entry : {
        app : "./src/index.js",
        vendor : VENDOR.js_libs
    },
}