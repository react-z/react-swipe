# swipr

swipr is a very minimal touch enabled swipe carousel

![](http://img1.wikia.nocookie.net/__cb20130426021828/villains/images/thumb/7/78/Swiper.jpg/500px-Swiper.jpg)

originally forked from [lory.js](http://meandmax.github.io/lory/) the touch enabled minimalistic slider written in vanilla JavaScript

## Installation

`npm install swipr --save`

## Usage

add some html

```html
<div class="swipr_example">
    <div class="swipr">
        <ul class="swipr_slides">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

    <span class="swipr_prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"></path></g></svg>
    </span>

    <span class="swipr_next">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"></path></g></svg>
    </span>
</div>

<script src="/scripts/bundle.js"></script>

```

<b>using node / commonJs</b>

Use browserify to build your main file below to bundle.js
first install browserify
    
`npm install -g browserify`

then bundle up your modules

`browserify main.js -o bundle.js`

initialize the swipr instance on your dom element.

```javascript
    var swipr = require('swipr');
    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.react-swipr');
        swipr(simple);
    });
```

<b>or... just throwing it in the browser</b>

include swipr.min.js, note this includes hammer.js pre baked.

in your main.js file initialize the swipr instance on your dom element.

```javascript
    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.react-swipr');
        swipr(simple);
    });
```

you will need some basic styles for your slider, which of course can be customized

[style.css](https://raw.githubusercontent.com/isekivacenz/swipr/master/example/styles.css)


## License

[MIT](http://opensource.org/licenses/MIT)
