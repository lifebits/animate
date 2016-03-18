#animate.js
*based on requestAnimationFrame*

`animate.js` add the CSS class `animated` and `animation name` to the element you want to animate. At the end of the animation cleans up after itself.

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
