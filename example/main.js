/* use browserify to build your main 
	 first install browserify
       sudo npm install -g browserify
	 then run
	   browserify main.js -o bundle.js
*/

var React = require('react');
/* make sure you have run npm install react and react-swipr
  then this line would be 
   var Swipr = require('react-swipr') 
*/
var Swipr = require('../js/react-swipr');

React.render( 
					React.createElement("div", null, 
					React.createElement(Swipr, {elementId: "react-swipr-1", navigation: true}, 
						React.createElement("li", null, "1"), 
						React.createElement("li", null, "2"), 
						React.createElement("li", null, "3")
					), 

					React.createElement(Swipr, {elementId: "react-swipr-2", navigation: true}, 
						React.createElement("li", null, "1"), 
						React.createElement("li", null, "2"), 
						React.createElement("li", null, "3")
					), 

					React.createElement(Swipr, {elementId: "react-swipr-3", navigation: false}, 
						React.createElement("li", null, "1"), 
						React.createElement("li", null, "2"), 
						React.createElement("li", null, "3")
					)

					)
						,
						document.getElementById("container")
);
