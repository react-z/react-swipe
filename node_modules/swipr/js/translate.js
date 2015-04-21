/**
 * translate function: translates to a given position in a given time in milliseconds
 *
 * @to        {number} number in pixels where to translate to
 * @duration  {number} time in milliseconds for the transistion
 * @ease      {string} easing css property
 */
var translate = function (to, duration, ease, style) {

    var domElements = require('./domElements')
    var style = domElements.slideContainer.style;

    if (!style) {
        return;
    }

    style.webkitTransitionTimingFunction =
    style.MozTransitionTimingFunction    =
    style.msTransitionTimingFunction     =
    style.OTransitionTimingFunction      =
    style.transitionTimingFunction       = ease;

    style.webkitTransitionDuration =
    style.MozTransitionDuration    =
    style.msTransitionDuration     =
    style.OTransitionDuration      =
    style.transitionDuration       = duration + 'ms';

    style.webkitTransform = 'translate3d(' + to + 'px, 0, 0)';

    style.msTransform  =
    style.MozTransform =
    style.OTransform   = 'translateX(' + to + 'px)';
};

module.exports = translate;
