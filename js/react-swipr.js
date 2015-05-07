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


    // seems to be ready at either DOM Load or window onload

    var elementId = this.props.elementId;
    var element = document.getElementById(elementId);

    if(element == null || element == undefined) {
      return;
    } else {
      this.swipe(element);
    }

        
  },
  swipe: function (element) {

    // initialize the swiper on the element with the defined id
    var swipr = require('swipr');
    swipr(element);

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
