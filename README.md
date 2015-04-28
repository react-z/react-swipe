# react-swipr

react-swipr is a react component, which is just a wrapper around swipr the minimal touch swipe carousel

![](http://img1.wikia.nocookie.net/__cb20130426021828/villains/images/thumb/7/78/Swiper.jpg/500px-Swiper.jpg)

## Installation

`npm install react-swipr --save`

## Usage

- <b>add some html</b>

```html
<div id="container">

</div>

<!-- common js -->
<script type="text/javascript" src="bundle.js"></script>
```

- <b>now some javascript to render the react-swipr component... react-swipr initializes the swipr on component mount</b> 

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

- <b>remember to pass in a unique element id for each swipr, as you may want multiple swiprs on one page.</b>
e.g.`elementId="product-swipr"` 

- <b>you need some minimal css for styling your slides</b>

[style.css](https://raw.githubusercontent.com/isekivacenz/react-swipr/master/example/styles.css)


## License

[MIT](http://opensource.org/licenses/MIT)
