# swipr

swipr is a very minimal touch enabled swipe carousel

![](http://img1.wikia.nocookie.net/__cb20130426021828/villains/images/thumb/7/78/Swiper.jpg/500px-Swiper.jpg)

originally forked from [lory.js](http://meandmax.github.io/lory/) the touch enabled minimalistic slider written in vanilla JavaScript

## Installation

`npm install swipr --save`

## Usage

- <b>add some html</b>

```html
<div class="swipr_example">
    <div class="swipr">
        <ul class="swipr_slides">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

    <span class="swipr_prev">&#8592;</span>
    <span class="swipr_next"> &#8594; </span>
</div>

<script src="/scripts/bundle.js"></script>
```

- <b>now some javascript</b>

<i>using node / commonJs</i>

Use browserify to bundle your main file below to bundle.js

`browserify main.js -o bundle.js`

initialize the swipr instance on your dom element.

```javascript
    var swipr = require('swipr');
    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.swipr-example');
        swipr(simple);
    });
```

<i>or... throwing it in the browser</i>

include swipr.min.js, note this includes hammer.js pre baked.

```javascript
    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.swipr-example');
        swipr(simple);
    });
```

- <b>you need some minimal css for styling your slides</b>

[style.css](https://raw.githubusercontent.com/isekivacenz/swipr/master/example/styles.css)

## License

[MIT](http://opensource.org/licenses/MIT)
