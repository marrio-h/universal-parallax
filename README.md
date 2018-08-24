# Universal Parallax
Easy parallax plugin using pure javascript. Cross browser compatibility, including mobile platforms (iOS, Android). Support for opaque backgrounds.

#### [See demo](https://marrio-h.github.io/universal-parallax/demo/)


## :zap: Features
- Easy setup
- Pure JavaScript
- Adaptive height
- Works on mobile devices
- Can have opacity without affecting content

## :floppy_disk: Install
`$ npm i universal-parallax -S`

## :rocket: Setup
#### #1
Include the script at the bottom of your project

```html
<script src="node_modules/universal-parallax/dist/universal-parallax.min.js"></script>
```

#### #2
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
	width: 100%;

	/* BG behaviour */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
```
:zap: _BG behaviour in seperate class gives more flexibility controlling them_

#### #3
If `<section>` is your container, make the parallax element inside it

```html
<section>
	<div class="parallax" data-parallax-image="path/to/your_image">
</section>
```

:zap: You can also use `background-image` to define your image instead of using `data-parallax-image=""`

#### #4
Initialize the JS function

```js
new universalParallax().init();
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


## Opacity
Transparency can be added and it won't affect the opacity of your content.

```css
.parallax {
	opacity: 0.5;
}
```
