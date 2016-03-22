#animate.js
*based on requestAnimationFrame*

`animate.js` add the CSS class `animated` and `animation name` to the element you want to animate. At the end of the animation cleans up after itself.
`animate.css` description of the animation classes

##Quick Use
1. Include the stylesheet and animate.js on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="animate.css">
    <script src="animate.js"></script>
  </head>
  ```
2. Invoke a function `animate(opts)`

  ```javascript
  animate({
    elemAnimated: animatedElemList,
    animateCssClass: 'animationName'
  });
  ```
3. You can invoke a function when an animation ends: `animate(opts, complete)`

  ```javascript
  animate({
    elemAnimated: animatedElemList,
    animateCssClass: 'animationName'
  }, function() {
    alert ("Animation Ends");
  });
  ```

**Main Feature:** You can pass HTMLCollection in `elemAnimated` and set the interval before the start of the next animation.

Full example:

```javascript
animate({
  elemAnimated: document.getElementsByTagName('a'),
  animateCssClass: 'slideInDown',
  duration: 1000,
  delay: 200
}, function() {
  alert ("Animation Ends");
});
```

[View a full example](https://plnkr.co/edit/wk7o4wzyVpRC1VGSLmyf?p=preview)

##Basic Usage ES6
1. Copy component in project: `animate-es2015-webpack.js` and `animate.css`

2. Import animate-es2015-webpack.js

  ```javascript
  import animate from '../vendor/animate/animate-es2015-webpack.js';
  ```

3. Invoke a function `animate(opts, complete)`
 
[View a full example](https://github.com/lifebits/lifebits.ru/blob/master/src/ui/mainNav/mainNav-mobile.js)
