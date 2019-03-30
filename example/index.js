import Swipe from '../lib/Swipe' // 'react-z-swipe'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Swipe elementId="react-swipe-1" navigation={true}>
          <li>
            <img src='https://raw.githubusercontent.com/svnm/react-webpack-example/master/images/react.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/svnm/react-webpack-example/master/images/styled-components.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/svnm/react-webpack-example/master/images/webpack.png' />
          </li>
        </Swipe>
        <Swipe elementId="react-swipe-2" navigation={false}>
          <li>
            <img src='https://raw.githubusercontent.com/svnm/react-webpack-example/master/images/react.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/svnm/react-webpack-example/master/images/styled-components.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/svnm/react-webpack-example/master/images/webpack.png' />
          </li>
        </Swipe>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
