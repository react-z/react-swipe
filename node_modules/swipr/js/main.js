'use strict';


var swipr = function (slider, opts) {

    var options = require('./options');
    var translate = require('./translate');
    var slide = require('./slide');
    var Hammer = require("hammerjs");
    var position = require('./position');
    var domElements = require('./domElements');
    var touchOffset;
    var delta;
    var isScrolling;

    /* dom elements and position */
    domElements.frame = slider.querySelector('.swipr');
    domElements.slideContainer = domElements.frame.querySelector('.swipr_slides');
    domElements.prevCtrl = slider.querySelector('.swipr_prev');
    domElements.nextCtrl = slider.querySelector('.swipr_next');

    position.x = domElements.slideContainer.offsetLeft;
    position.y = domElements.slideContainer.offsetTop;

    /* set up slides */
    options.slides = Array.prototype.slice.call(domElements.slideContainer.children);

    /* if object is jQuery convert to native DOM element */
    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
        slider = slider[0];
    }

    /**
     * onPanstart function: called when panning kicks off
     */    
    var onPanstart = function (event) {

        touchOffset = {
            x: event.pointers[0].pageX,
            y: event.pointers[0].pageY
        };

        isScrolling = undefined;

        delta = {};

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
                translate(position.x + delta.x, 0, null);
            }
        });

        mc.off("panend");
        mc.on("panend",function() {
            var direction = delta.x < 0;
            slide(false, direction);
        });

    };

    /* initialize hammerjs on the slider element */
    var mc = new Hammer(domElements.slideContainer);    
    mc.on("panstart", onPanstart);

    /**
     * public
     * resetSlider function: called on resize
     */
    var resetSlider = function () {
        domElements.slidesWidth = domElements.slideContainer.getBoundingClientRect().width || domElements.slideContainer.offsetWidth;
        domElements.frameWidth  = domElements.frame.getBoundingClientRect().width || domElements.frame.offsetWidth;
        options.index = 0;
        translate(options.index, options.rewindSpeed, options.ease);
    };

    resetSlider();

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
        slide(false, false);
    };

    /**
     * next function: called on clickhandler
     */     
    var next = function () {
        slide(false, true);
    };

    if (domElements.prevCtrl && domElements.nextCtrl) {
        domElements.prevCtrl.addEventListener('click', prev);
        domElements.nextCtrl.addEventListener('click', next);
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
