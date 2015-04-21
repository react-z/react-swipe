/* use browserify to build this main.js
	 run browserify main.js -o bundle.js
*/

var React = require('react');
/* make sure you have run npm install react and react-swipr
  then this line would be 
   var Swipr = require('react-swipr') 
*/
var Swipr = require('../js/swipr.js');

React.render( React.createElement(Swipr, null, 
	              React.createElement("li", null, "1"), 
								React.createElement("li", null, "2"), 
								React.createElement("li", null, "3"), 
								React.createElement("li", null, "4")
							)
						,
						document.getElementById("container")
);


document.addEventListener('DOMContentLoaded', function () {
    var simple = document.querySelector('.react-swipr');
    swipr(simple);
});