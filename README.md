## react-swipe

[![npm version](https://badge.fury.io/js/react-swipr.svg)](https://badge.fury.io/js/react-swipr)

![](https://raw.githubusercontent.com/react-z/react-swipe/master/example/screenshot.gif)

A simple react swipe component

## Install

``` js
yarn add react-z-swipe
```

## Use

``` js
import Swipe from 'react-z-swipe'
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
```

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
