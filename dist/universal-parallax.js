'use strict';

/**
* @version 1.2.0
* @author Marius Hansen <marius.o.hansen@gmail.com>
* @license MIT
* @description Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms. Based on goodparallax
* @copyright © Marius Hansen 2018
*/

var windowHeight = window.innerHeight;
if (/Mobi/.test(navigator.userAgent)) {
	windowHeight = screen.height;

	var mobileCss = document.createElement('style');
	mobileCss.type = 'text/css';
	mobileCss.innerHTML = '\n\t@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t\t.parallax__container {\n\t\t\tclip: auto;\n\t\t\t-webkit-mask-image: -webkit-linear-gradient(top, #fff 0%, #fff 100%);\n\t\t\t-webkit-backface-visibility: hidden;\n\t\t\t-webkit-webkit-perspective: 1000;\n\t\t}\n\t};\n\t';

	document.getElementsByTagName('head')[0].appendChild(mobileCss);
}

function calculateHeight(parallax, speed) {
	for (var i = 0; parallax.length > i; i++) {
		var container = parallax[i].parentElement.parentElement.getBoundingClientRect().height;

		var elemOffsetTop = (windowHeight - container) / 2;
		var bgHeight = Math.ceil(container + (elemOffsetTop - elemOffsetTop / speed) * 2) + 4;
		parallax[i].style.height = bgHeight + 'px';
	}
}

function animateParallax(parallax, speed) {
	for (var i = 0; parallax.length > i; i++) {
		var container = parallax[i].parentElement.parentElement.getBoundingClientRect();

		if (container.top + container.height >= 0 && container.top <= windowHeight) {
			var bgScroll = (container.top - 2) / speed;

			parallax[i].style.top = bgScroll + 'px';
		}
	}
}

var universalParallax = function universalParallax() {
	var up = function up(parallax, speed) {
		if (speed < 1) {
			speed = 1;
		}

		calculateHeight(parallax, speed);

		window.addEventListener("resize", function () {
			calculateHeight(parallax, speed);
		});

		var latestKnownScrollY = 0,
		    scrolled = false;

		function onScroll() {
			latestKnownScrollY = window.scrollY;
			if (!scrolled) {
				requestAnimationFrame(runScrollAnimations);
			}
			scrolled = true;
		}

		function runScrollAnimations() {
			scrolled = false;
			var currentScrollY = latestKnownScrollY;
			animateParallax(parallax, speed);
		}

		window.addEventListener('scroll', onScroll, false);
	};

	this.init = function (param) {
		if (typeof param === 'undefined') {
			param = {};
		}

		param = {
			speed: typeof param.speed !== 'undefined' ? param.speed : 1.5,
			className: typeof param.className !== 'undefined' ? param.className : 'parallax'
		};
		var parallax = document.getElementsByClassName(param.className);

		for (var i = 0; parallax.length > i; i++) {
			var wrapper = document.createElement('div');
			parallax[i].parentNode.insertBefore(wrapper, parallax[i]);
			wrapper.appendChild(parallax[i]);
			var parallaxContainer = parallax[i].parentElement;
			parallaxContainer.className += 'parallax__container';

			if (window.getComputedStyle(parallaxContainer.parentElement, null).getPropertyValue('position') !== 'relative') {
				parallaxContainer.parentElement.style.position = 'relative';
			}

			var imgData = parallax[i].dataset.parallaxImage;

			if (typeof imgData !== 'undefined') {
				parallax[i].style.backgroundImage = 'url(' + imgData + ')';

				if (parallax[i].classList.length === 1 && parallax[i].classList[0] === 'parallax') {
					Object.assign(parallax[i].style, {
						'background-repeat': 'no-repeat',
						'background-position': 'center',
						'background-size': 'cover'
					});
				}
			}
		};

		up(parallax, param.speed);
	};
};
