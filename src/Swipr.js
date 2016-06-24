/**
 * clamp function: Returns a number whose value is limited to the given range.
 *
 * @min {number} minimum number in range
 * @max {number} maximum number in range
 */
var clamp = function (min, max) {
    if (typeof max === 'undefined') {
        max = min;
        min = 0;
    }

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    return function (value) {
        return Math.min(Math.max(value, min), max);
    };
};


/**
 * translate function: translates to a given position in a given time in milliseconds
 *
 * @to        {number} number in pixels where to translate to
 * @duration  {number} time in milliseconds for the transistion
 * @ease      {string} easing css property
 * @style     {object} style object
 */
var translate = function (to, duration, ease, style) {
    style.webkitTransitionTimingFunction =
    style.MozTransitionTimingFunction    =
    style.transitionTimingFunction       = ease;

    style.webkitTransitionDuration =
    style.MozTransitionDuration    =
    style.transitionDuration       = duration + 'ms';

    style.webkitTransform = 'translate3d(' + to + 'px, 0, 0)';
    style.MozTransform =
    style.transform   = 'translateX(' + to + 'px)';
};

import Hammer from 'hammerjs'

const swipr = (parentElement, opts) => {

    let touchOffset;
    let delta;
    let isScrolling;

    /**
     * onPanstart function: called when panning kicks off
     */
    const onPanstart = event => {

        resetSlider()

        /* if no slides here, maybe the dom didn't reload, e.g. client side routing */
        if(!config.domElements.slides.length){
          config.domElements.slides = Array.prototype.slice.call(config.domElements.slideContainer.children);
        }

        touchOffset = { x: event.pointers[0].pageX, y: event.pointers[0].pageY };
        isScrolling = undefined;
        delta = {};

        /* on panning */
        mc.off("panmove");
        mc.on("panmove",event => {

            const touches = event.changedPointers[0];
            delta = {
                x: touches.pageX - touchOffset.x,
                y: touches.pageY - touchOffset.y
            };

            if (typeof isScrolling === 'undefined') {
                isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
            }

            if (!isScrolling) {
                translate(config.position.x + delta.x, 0, config.options.ease, config.domElements.slideContainer.style);
            }
        });

        /* panning ends */
        mc.off("panend");
        mc.on("panend",event => {
            resetSlider()
            const canSlide = Math.abs(delta.x) > config.options.tolerance;
            const direction = canSlide ? delta.x < 0 : null;
            slide(direction);
        });
    };

    /**
     * config function: options stored for the swipr instance
     */
    var config = function (slider) {

        this.domElements = {
          frame: undefined,
          slideContainer: undefined,
          slidesWidth: undefined,
          frameWidth: undefined,
          slides: undefined
        };

        this.domElements.frame = slider.querySelector('.swipr');
        this.domElements.slideContainer = this.domElements.frame.querySelector('.swipr_slides');
        this.domElements.slides = Array.prototype.slice.call(this.domElements.slideContainer.children);

        this.position = {};
        this.position.x = this.domElements.slideContainer.offsetLeft;
        this.position.y = this.domElements.slideContainer.offsetTop;

        this.options = {
          slidesToScroll: 1,
          slideSpeed: 600,
          rewindSpeed: 600,
          snapBackSpeed: 600,
          ease: 'ease',
          rewind: true,
          index: 0,
          nextIndex: (opts.index || 0) + 1,
          tolerance: 0
        };

        for (const key in opts || {}) { this.options[key] = opts[key]; }
    }

    var config = new config(parentElement);

    /**
     * findAncestor: find an ancestor
     */
    const findAncestor = (el, cls) => {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    };


    /**
     * resetSlider function: reset the slide container elements, slide elements, slide and frame width
     */
    var resetSlider = () => {
        const slideContainer = config.domElements.frame.querySelector('.swipr_slides');
        config.domElements.slideContainer = slideContainer;
        config.domElements.slides = Array.prototype.slice.call(slideContainer.children);
        config.domElements.slidesWidth = slideContainer.scrollWidth || slideContainer.getBoundingClientRect().width || slideContainer.offsetWidth;
        config.domElements.frameWidth = config.domElements.frame.getBoundingClientRect().width || config.domElements.frame.offsetWidth;
    };

    /* initialize hammerjs on the slider element */
    var mc = new Hammer(config.domElements.slideContainer);
    mc.on("panstart", onPanstart);

    /**
     * next function: called on clickhandler
     */
    const next = event => {
        resetSlider()
        const direction = true;
        slide(direction)

    };

    /**
     * prev function: called on clickhandler
     */
    const prev = () => {
        resetSlider()
        const direction = false;
        slide(direction)
    };

    /**
     * slide function: slides the elements forward or backwards based on direction
     */
    var slide = (direction, slideSpeed) => {
        const maxOffset   = (config.domElements.slidesWidth - config.domElements.frameWidth);
        const limitOffset = clamp(maxOffset * -1, 0);
        const limitIndex  = clamp(0, config.domElements.slides.length - 1);
        let duration    = slideSpeed == undefined ? config.options.slideSpeed : slideSpeed;

        /* update the index */
        if (direction === null) {
            config.options.nextIndex = config.options.index;
        } else if (direction) {
            config.options.nextIndex = config.options.index + config.options.slidesToScroll;
        } else {
            config.options.nextIndex = config.options.index - config.options.slidesToScroll;
        }

        config.options.nextIndex = limitIndex(config.options.nextIndex);
        let nextOffset = limitOffset(config.domElements.slides[config.options.nextIndex].offsetLeft * -1);

        /* on rewind */
        if (config.options.rewind && Math.abs(config.position.x) === maxOffset) {
            nextOffset = 0;
            config.options.nextIndex  = 0;
            duration = config.options.rewindSpeed;
        }

        /* translate to the nextOffset by a defined duration and ease function */
        translate((nextOffset), duration, config.options.ease, config.domElements.slideContainer.style);

        /* update the position with the next position */
        config.position.x = nextOffset;

        /* update the index with the nextIndex if offset of the nextIndex is in the range of the maxOffset */
        if (config.domElements.slides[config.options.nextIndex].offsetLeft <= maxOffset) {
            config.options.index = config.options.nextIndex;
            config.options.nextIndex++;
        }

        if (config.options.onIndexChange) { config.options.onIndexChange(config.options.index); }
    };

    const setIndex = index => {
      if (index === null || index === undefined || index === config.options.index) { return; }
      resetSlider();
      config.options.index = index;
      slide(null);
    };

    /* initially reset the slider */
    resetSlider();
    slide(null, 0);

    return {
        setIndex,
        next,
        prev
    };
};

module.exports = swipr;
