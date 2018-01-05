/** ALL INFORMATION ABOUT VENDOR ASSETS ARE DEFINED IN THIS FILE */ 
const VENDOR = require('./src/vendor/vendor-libs');

const path = require('path');


module.exports = {
    entry : {
        app : "./src/index.js",
        vendor : VENDOR.js_libs
    },
    module : {
        rules : [
            //JAVASCRIPT PROCESS
            {
                test : /\.js$/,
                use : ['babel-loader'],
                include : path.resolve(__dirname, "src"),  /** THERE`S ALSO THE OPTION TO EXCLUDE AN SPECIFIC FOLDER. ADD THE 'EXCLUDE' PROPERTY:  exclude : /node_modules/ */
            },
        ]
    }
};