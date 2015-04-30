'use strict';

var swipr = function (slider, opts) {

    var translate = require('./translate');
    var clamp = require('./clamp');
    var Hammer = require("hammerjs");
    var touchOffset;
    var delta;
    var isScrolling;

    /**
     * onPanstart function: called when panning kicks off
     */    
    var onPanstart = function (event) {

        config.domElements.slidesWidth = config.domElements.slideContainer.getBoundingClientRect().width || config.domElements.slideContainer.offsetWidth;
        config.domElements.frameWidth = config.domElements.frame.getBoundingClientRect().width || config.domElements.frame.offsetWidth;

        touchOffset = {
            x: event.pointers[0].pageX,
            y: event.pointers[0].pageY
        };

        isScrolling = undefined;

        delta = {};

        /* on panning */
        mc.off("panmove");
        mc.on("panmove",function (event) {

            var touches = event.changedPointers[0];

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
        mc.on("panend",function (event) {

            var direction = delta.x < 0;
            var maxOffset   = (config.domElements.slidesWidth - config.domElements.frameWidth);
            var limitOffset = clamp(maxOffset * -1, 0);
            var limitIndex  = clamp(0, config.options.slides.length - 1);
            var duration    = config.options.slideSpeed;

            /* update the index */
            if (direction) {
                config.options.nextIndex = config.options.index + config.options.slidesToScroll;
            } else {
                config.options.nextIndex = config.options.index - config.options.slidesToScroll;
            }
            config.options.nextIndex = limitIndex(config.options.nextIndex);

            var nextOffset = limitOffset(config.options.slides[config.options.nextIndex].offsetLeft * -1);

            /* on rewind */
            if (config.options.rewind && Math.abs(config.position.x) === maxOffset && direction) {
                nextOffset = 0;
                config.options.nextIndex  = 0;
                duration = config.options.rewindSpeed;
            }

            /* translate to the nextOffset by a defined duration and ease function */
            translate((nextOffset), duration, config.options.ease, config.domElements.slideContainer.style);

            /* update the position with the next position */
            config.position.x = nextOffset;

            /* update the index with the nextIndex if offset of the nextIndex is in the range of the maxOffset */
            if (config.options.slides[config.options.nextIndex].offsetLeft <= maxOffset) {
                config.options.index = config.options.nextIndex;
                config.options.nextIndex++;
            }

        });
    };


    /**
     * config function: options stored for the swipr instance
     */
    var config = function (slider) {

        this.domElements = {
          frame: undefined,
          slideContainer: undefined,
          prevCtrl: undefined,
          nextCtrl: undefined,
          slidesWidth: undefined,
          frameWidth: undefined
        };

        this.domElements.frame = slider.querySelector('.swipr');
        this.domElements.slideContainer = this.domElements.frame.querySelector('.swipr_slides');
        this.domElements.prevCtrl = slider.querySelector('.swipr_prev');
        this.domElements.nextCtrl = slider.querySelector('.swipr_next');

        this.position = {
          x: undefined,
          y: undefined
        };

        this.position.x = this.domElements.slideContainer.offsetLeft;
        this.position.y = this.domElements.slideContainer.offsetTop;

        this.options = {
          slidesToScroll: 1,
          slideSpeed: 300,
          rewindSpeed: 600,
          snapBackSpeed: 200,
          ease: 'ease',
          rewind: true,
          index: 0,
          nextIndex: 1,
          slides: undefined
        };

        this.options.slides = Array.prototype.slice.call(this.domElements.slideContainer.children);
    }

    var config = new config(slider);

    /**
     * public
     * resetSlider function: called on resize
     */
    var resetSlider = function () {

        config.domElements.slidesWidth = config.domElements.slideContainer.getBoundingClientRect().width || config.domElements.slideContainer.offsetWidth;
        config.domElements.frameWidth = config.domElements.frame.getBoundingClientRect().width || config.domElements.frame.offsetWidth;
        config.options.index = 0;
    };

    resetSlider();

    /* initialize hammerjs on the slider element */
    var mc = new Hammer(config.domElements.slideContainer);    
    mc.on("panstart", onPanstart);


    /**
     * onResize function: event for resize of page
     */
    var onResize = function () {
        resetSlider();
    };

    window.addEventListener('resize', onResize);

    /**
     * prev function: called on clickhandler
     */
    var prev = function () {
        translate((nextOffset), duration, config.options.ease, config.domElements.slideContainer.style);
        config.position.x = nextOffset;
    };

    /**
     * next function: called on clickhandler
     */     
    var next = function () {
        translate((nextOffset), duration, config.options.ease, config.domElements.slideContainer.style);
        config.position.x = nextOffset;
    };

    /* fire off click events for next / prev controls */
    if (config.domElements.prevCtrl && config.domElements.nextCtrl) {
        config.domElements.prevCtrl.addEventListener('click', prev);
        config.domElements.nextCtrl.addEventListener('click', next);
    }


    return {

        reset: function () {
            resetSlider();
        },

        slideTo: function (index) {
            slide(index);
        },

        prev: prev,

        next: next
    };
};

module.exports = swipr;
