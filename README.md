# react-swipr

react-swipr is a minimal swiping component for react.

## Installation

`npm install react-swipr --save`

## Usage

```javascript
import Swipr from 'react-swipr'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Swipr elementId="react-swipr-1">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </Swipr>
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Styles

react-swipr can be used with your own custom styles. A minimal [swipr.css](https://github.com/StevenIseki/react-swipr/blob/master/example/public/swipr.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
