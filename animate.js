'use strict';

/**
 * Created by LifeBits
 * https://github.com/lifebits/animate
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function animate(opts, complete) {

    var animatedElements = opts.elemAnimated;
    var animatedCssClasses = opts.animateCssClass;
    var postponeAnimation = opts.postponeAnimation || 0; //Отложить старт анимации в мс
    var duration = opts.duration || 1000;
    var delay = opts.delay || 0;
    var numberElements = animatedElements.length; //Кол-во цепочек в анимации

    if (numberElements) {
        for (var i = 0; i < animatedElements.length; i++) {
            var elemNumber = i;
            var currentElement = animatedElements[i];

            var startAnimate = performance.now() + postponeAnimation + delay * elemNumber;
            var endAnimate = startAnimate + duration;

            startAnimation(currentElement, startAnimate, endAnimate, elemNumber);
        }
    } else {
        numberElements = 1;
        var _elemNumber = 0;
        var _currentElement = animatedElements;
        var _startAnimate = performance.now() + postponeAnimation;
        var _endAnimate = _startAnimate + duration;

        startAnimation(_currentElement, _startAnimate, _endAnimate, _elemNumber);
    }

    function startAnimation(currentElement, startAnimate, endAnimate, elemNumber) {

        updateAnimation();

        function setAnimation() {
            if (!currentElement.classList.contains('animated')) {
                currentElement.classList.remove('invisible');
                currentElement.classList.add('animated');

                if (is_array(animatedCssClasses)) {
                    animatedCssClasses.forEach(function (item) {
                        currentElement.classList.add(item);
                    });
                } else {
                    currentElement.classList.add(animatedCssClasses);
                }
            }
        }

        function removeAnimation() {
            currentElement.classList.remove('animated');

            if (is_array(animatedCssClasses)) {
                animatedCssClasses.forEach(function (item) {
                    currentElement.classList.remove(item);
                });
            } else {
                currentElement.classList.remove(animatedCssClasses);
            }
        }

        function updateAnimation() {
            var currentTime = performance.now();

            if (currentTime >= startAnimate) {
                setAnimation();
            }

            if (currentTime < endAnimate) {
                requestAnimationFrame(updateAnimation);
            }

            if (currentTime >= endAnimate) {
                removeAnimation();
                if (complete && numberElements == elemNumber + 1) {
                    complete();
                }
            }
        }
    }

    function is_array(a) {
        return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == "object" && a instanceof Array;
    }
}
