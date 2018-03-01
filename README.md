# Universal Parallax
Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms.
[See demo](https://marrio-h.github.io/universal-parallax/demo/)


## Features
- Easy setup
- Pure JavaScript plugin - no jQuery needed
- Adaptive height
- Mobile phone support
- Support for transparent backgrounds - without affecting content

## Install
`$ npm i universal-parallax -S`

## Usage
###### #1
Include the script at the bottom of your project

```html
<script src="node_modules/universal-parallax/dist/universal-parallax.min.js"></script>
```

###### #2
Choose between either..
- Including this in your `<head>` section

```html
<link href="node_modules/universal-parallax/dist/universal-parallax.min.css" rel="stylesheet">
```

- Or adding this CSS  
-- _Gives more flexibility controlling behaviour of bg images (see "optional" comment)_

```css
.parallax--container {
	position: absolute;
	clip: rect(0, auto, auto, 0);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -10; /* place further back if necessary */
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
If `<section>` is your container, make the parallax element inside it, just before the closing tag

```html
<section>
	...
	<div class="parallax" data-parallax-image="path/to/your_image">
</section>
```

* You can also use a class to define your `background-image` in CSS, instead of using `data-parallax-image=""`

###### #4
Fire up the JS function

```js
new universalParallax().init();
```

###### #5
Check the result in your project
- If it resembles [the demo](https://marrio-h.github.io/universal-parallax/demo/) then you're done
- Pls [report any problems](https://github.com/marrio-h/universal-parallax/issues) you find! Thanks :)

## Custom speed
You can change the parallax speed; the higher the number, the slower the parallax effect.

```js
new universalParallax().init({
	speed: 6.0
});
```

**Note:** `speed: 1.2` is the minimum value before the background image is fixed.


## Opacity
If desired, transparency can be added to one, or all parallax elements with CSS and it won't affect the opacity of your content above

```css
.parallax {
	opacity: 0.5;
}
```
