import Swipr from '../lib/ReactSwipr' // 'react-swipr'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Swipr elementId="react-swipr-1" navigation={true}>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/react.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/styled-components.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/webpack.png' />
          </li>
        </Swipr>
        <Swipr elementId="react-swipr-2" navigation={false}>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/react.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/styled-components.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/webpack.png' />
          </li>
        </Swipr>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
