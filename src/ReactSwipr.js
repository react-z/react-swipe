import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * React Swipr component
**/
export default class ReactSwipr extends Component {
  componentDidMount() {
    var elementId = this.props.elementId;
    var element = document.getElementById(elementId);

    if(element == null || element == undefined) {
      return;
    } else {
      this.swipe(element);
    }
  }

  componentDidUpdate() {
    this.swipr.setIndex(this.props.index);
  }

  swipe(element) {
    var swipr = require('./Swipr');
    this.swipr = swipr(element, this.props);
  }

  next = () => {
    this.swipr.next();
  }

  prev = () => {
    this.swipr.prev();
  }

  render () {
    const { navigation, elementId } = this.props;
    return (
      <div className='react-swipr' id={elementId}>
        <div className='swipr'>
          <div className='swipr_slides'>
            { this.props.children }
          </div>
        </div>
        {
          navigation &&
            <div className='nav'>
              <span
                className='swipr_next'
                onClick={this.next}
              >
                next
              </span>
              <span
                className='swipr_prev'
                onClick={this.prev}
              >
                prev
              </span>
            </div>
        }
      </div>
    )
  };

}

ReactSwipr.propTypes = {
  elementId: PropTypes.string.isRequired,
  navigation: PropTypes.bool
};
