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

- <b>now some javascript</b>

```javascript

var React = require("react");
var Swipr = require('react-swipr');

React.render( <Swipr>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </Swipr>
            ,
            document.getElementById("container")
);

document.addEventListener('DOMContentLoaded', function () {
    var simple = document.querySelector('.react-swipr');
    swipr(simple);
});

```

- <b>you need some minimal css for styling your slides</b>

[style.css](https://raw.githubusercontent.com/isekivacenz/react-swipr/master/example/styles.css)


## License

[MIT](http://opensource.org/licenses/MIT)