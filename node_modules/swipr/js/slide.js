/**
 * slide function: slides to a given position in a given time in milliseconds
 *
 * @nextIndex {number} index number for the next slide
 * @direction {bool} true is forwards, false is reverse
 */
var slide = function (nextIndex, direction) {

    var clamp = require('./clamp');
    var position = require('./position');
    var translate = require('./translate');
    var domElements = require('./domElements');
    var options = require('./options');

    var maxOffset   = (domElements.slidesWidth - domElements.frameWidth);
    var limitIndex  = clamp(0, options.slides.length - 1);
    var limitOffset = clamp(maxOffset * -1, 0);
    var duration    = options.slideSpeed;

    if (typeof nextIndex !== 'number') {
        if (direction) {
            nextIndex = options.index + options.slidesToScroll;
        } else {
            nextIndex = options.index - options.slidesToScroll;
        }
    }

    nextIndex = limitIndex(nextIndex);
    var nextOffset = limitOffset(options.slides[nextIndex].offsetLeft * -1);

    if (options.rewind && Math.abs(position.x) === maxOffset && direction) {
        nextOffset = 0;
        nextIndex  = 0;
        duration   = options.rewindSpeed;
    }

    /* translate to the nextOffset by a defined duration and ease function */
    translate(nextOffset, duration, options.ease);

    /* update the position with the next position */
    position.x = nextOffset;

    /* update the index with the nextIndex if offset of the nextIndex is in the range of the maxOffset */
    if (options.slides[nextIndex].offsetLeft <= maxOffset) {
        options.index = nextIndex;
    }
};

module.exports = slide;
