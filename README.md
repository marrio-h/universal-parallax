# Universal Parallax
Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms.
[See demo here](https://marrio-h.github.io/universal-parallax/demo/)

### Features
- Easy setup
- Pure JavaScript plugin - no jQuery needed
- Adaptive height
- Mobile phone support

### Install
`$ npm i universal-parallax -S`

### Usage
###### #1
Include the script in your project.
```html
<script src="node_modules/universal-parallax/dist/universal-parallax.min.js"></script>
```
###### #2
Include this CSS file in your project `<link href="node_modules/universal-parallax/dist/universal-parallax.min.css" rel="stylesheet">`

Or add this CSS
```css
.parallax--container {
	position: absolute;
	clip: rect(0, auto, auto, 0);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -10;
}

.parallax {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	/* optional */
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
```

###### #3
If `<section>` is your container, make the parallax element inside it.

```html
 <section>
    <div class="parallax" data-parallax-image="path/to/your_image">
 </section>
```

* You can also use a class to define your `background-image` in CSS, instead of using `data-parallax-image=""`.

* If desired, transparency can be added to the parallax element and it won't affect the transparency of your content.
```css
.parallax {
	opacity: 0.5;
}
```

###### #4
Fire up the JS function.
```js
new universalParallax().init();
```

### Custom speed
You can change the parallax speed.
```js
// Plugin customization
new universalParallax().init({
    speed: 6.0
});
```
Note: `speed: 1.2` is the minimum value before the background image is fixed.
