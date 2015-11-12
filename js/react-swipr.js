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
    elementId: React.PropTypes.string.isRequired,
    navigation: React.PropTypes.bool
  },

  componentDidMount: function() {

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
    swipr(element, this.props);

  },
  render: function(){

    var navigation = null

    if(this.props.navigation){

      navigation = (
        React.createElement("div", null, 
          React.createElement("span", {className: "swipr_prev"},
            React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 501.5 501.5"}, React.createElement("g", null, React.createElement("path", {fill: "#ff6700", d: "M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"})))
          ), 
          React.createElement("span", {className: "swipr_next"},
            React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 501.5 501.5"}, React.createElement("g", null, React.createElement("path", {fill: "#ff6700", d: "M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"})))
          )
        )
      );
    }

    return (

      React.createElement("div", {className: "react-swipr", id: this.props.elementId}, 
        React.createElement("div", {className: "swipr"}, 
          React.createElement("ul", {className: "swipr_slides"}, 
            this.props.children
          )
        ),
        navigation
      )

    );
  }

});

module.exports = ReactSwipr;