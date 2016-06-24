import Swipr from '../lib/ReactSwipr' // 'react-swipr'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Swipr elementId="react-swipr-1" navigation={false}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </Swipr>
        <Swipr elementId="react-swipr-2" navigation={true}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </Swipr>
        <Swipr elementId="react-swipr-3">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </Swipr>
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
