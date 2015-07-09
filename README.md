# react-swipr

react-swipr is a react component, which is just a wrapper around [swipr](https://github.com/StevenIseki/swipr) the minimal touch swipe carousel

## Installation

`npm install react-swipr --save`

## Usage

- <b>add some html</b>

```html
<div id="container">

</div>

<script type="text/javascript" src="bundle.js"></script>
```

- <b>now some javascript to render the react-swipr component... </b>

react-swipr initializes the swipr on component mount

```javascript

var React = require("react");
var Swipr = require('react-swipr');

// if you added multiple to the page you would render each as below but with different ids.

React.render( <Swipr elementId="product-swipr">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </Swipr>
            ,
            document.getElementById("container")
);

```

- <b>remember to pass in unique element id's for each swipr, if you want multiple swiprs on one page.</b>

- <b>you need some minimal css for styling your slides</b>

[style.css](https://github.com/StevenIseki/react-swipr/blob/master/example/styles.css)


## License

[MIT](http://opensource.org/licenses/MIT)
