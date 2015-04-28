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

  propTypes: {
    elementId: React.PropTypes.string.isRequired
  },

  componentDidMount: function() {

    var swipr = require('swipr');

    document.addEventListener('DOMContentLoaded', function () {
        var elementId = this.props.elementId;
        var element = document.getElementById(elementId);
        if(element == null || element == undefined) {
          return;
        }

        // initialize the swiper on the element with the defined id
        swipr(element);

    }.bind(this));
        
  },
  componentWillUnmount: function() {
  },  
  render: function(){

    return (

      React.createElement("div", {className: "react-swipr", id: this.props.elementId}, 

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
