#animate.js
*based on requestAnimationFrame*

`animate.js` Add the CSS class `animated` and `animation name` to the element you want to animate.

##quick use
1. Include the stylesheet and animate.js on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="animate.css">
    <script src="animate.js"></script>
  </head>
  ```
2. Invoke a function `animate(opts, complete)`

  ```javascript
  animate({
    elemAnimated: animatedElemList,
    animateCssClass: 'animationName'
  });
  ```
Full example:
[View a full example](https://embed.plnkr.co/wk7o4wzyVpRC1VGSLmyf/)
