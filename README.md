
[![npm version](https://badge.fury.io/js/universal-parallax.svg)](https://badge.fury.io/js/universal-parallax) [![Package Quality](https://npm.packagequality.com/shield/universal-parallax.svg)](https://packagequality.com/#?package=universal-parallax) [![](https://data.jsdelivr.com/v1/package/npm/universal-parallax/badge?style=rounded)](https://www.jsdelivr.com/package/npm/universal-parallax) ![](https://img.shields.io/github/size/marrio-h/universal-parallax/dist/universal-parallax.min.js.svg?style=flat)

# Universal Parallax
Easy parallax plugin using pure javascript. Lightweight (2kb) and cross browser compatibility - including mobile platforms (iOS, Android).

#### [See demo](https://marrio-h.github.io/universal-parallax/demo/)


## :zap: Features
- Easy setup
- Pure JavaScript
- Adaptive height
- Works on mobile devices
- Lightweight (2kb minified)

## :floppy_disk: Install
`$ npm i universal-parallax -S`

## :rocket: Setup

#### #1
_Choose between:_

- Include this in your `<head>` section

```html
<link href="node_modules/universal-parallax/dist/universal-parallax.min.css" rel="stylesheet">
```

- Or add this CSS

```css
.parallax__container {
	clip: rect(0, auto, auto, 0);
	height: 100%;
	left: 0;
	overflow: hidden;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -100;
}

.parallax {
	position: fixed;
	top: 0;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	width: 100%;

	/* BG behaviour */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
```
:zap: _BG behaviour in seperate class gives more flexibility controlling them_
:zap: _SASS version available in /dist folder_

#### #2
If `<section>` is your container, make the parallax element inside it

```html
<section>
	<div class="parallax" data-parallax-image="path/to/your_image">
</section>
```

:zap: You can also use `background-image` to define your image instead of using `data-parallax-image=""`

#### #3
Include the script to your project

```html
<script src="node_modules/universal-parallax/dist/universal-parallax.min.js"></script>
```

#### #4
Initialize the JS function

```html
<script>
	new universalParallax().init();
</script>
```

---
That's it! :checkered_flag:
- If it resembles [the demo](https://marrio-h.github.io/universal-parallax/demo/) - you're done :tada:
- See customizations underneath
- Please [report any problems](https://github.com/marrio-h/universal-parallax/issues) you find
- Otherwise, let me know me for [new features or improvements](https://github.com/marrio-h/universal-parallax/projects/1#column-3080421). Thanks!

## Custom speed
You can change the parallax speed; the higher the number, the slower the parallax effect

```js
new universalParallax().init({
	speed: 6.0
});
```

:zap: `speed: 1` is the minimum value before the background image is fixed


## Tips

#### Opacity
If you want your backround color to shine through or dampen the image without making it a .png - just add transparency to it

```css
.parallax {
	opacity: 0.5;
}
```
