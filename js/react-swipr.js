/** @jsx React.DOM */

var React = require('react');

/**
 * React Swipr component
**/

var ReactSwipr = React.createClass({
  getInitialState: function(){
     return {
     }
  },
  componentDidMount: function() {

    var swipr = require('swipr');

    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.react-swipr');
        swipr(simple);
    });
        
  },
  componentWillUnmount: function() {
  },  
  render: function(){

    return (

      React.createElement("div", {className: "react-swipr"}, 

        React.createElement("div", {className: "swipr"}, 
            React.createElement("ul", {className: "swipr_slides"}, 
              this.props.children
            )
        )

      )

    );
  }

});

module.exports = ReactSwipr;
