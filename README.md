# react-swipr

react-swipr is a react component, which is just a wrapper around swipr the minimal touch swipe carousel

![](http://img1.wikia.nocookie.net/__cb20130426021828/villains/images/thumb/7/78/Swiper.jpg/500px-Swiper.jpg)

## Installation

`npm install react-swipr --save`

## Usage

###html

```html

```

###javascript

```javascript
var React = require("react");
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);

var Swipr = require('react-swipr');


var Slider = React.createClass({

  propTypes: {
    products: React.PropTypes.array.isRequired
  },

  render: function() {

    var rows = [];

    var row = this.props.products.map(function (p, i) {

        return (
              <li>
              <div style={style}>
                <img key={i} src={p.image} alt="" />
              </div>
              </li>
        );
    }.bind(this));

    return (
      <div>
          <Swipr>
            <li>
                {rows}
            </li>
          </Swipr>
      </div>
    );
  }

});

module.exports = Slider;
```

###css

```css
  /* Include some basic styles for your slides, here is a basic example */
```

## License

(The MIT License)

Copyright (c) 2015 isekivacenz &lt;stevenisekimartin@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
