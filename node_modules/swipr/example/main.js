/* use browserify to build your main 

	 first install browserify
    npm install -g browserify
	 then run
	  browserify main.js -o bundle.js
*/

/* make sure you have run npm install swipr
  then this line would be 
   var swipr = require('swipr') 
*/
var swipr = require('../js/main.js');

document.addEventListener('DOMContentLoaded', function () {
    var simple = document.querySelector('.swipr_example');
    swipr(simple);
});