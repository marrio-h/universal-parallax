/**
* @version 1.0.0
* @author Marius Hansen <marius.o.hansen@gmail.com>
* @license MIT
* @description Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms. Based on goodparallax
* @copyright © Marius Hansen 2018
*/


var universalParallax = function() {

	var up = function(parallax, speed) {

		if(speed < 1.2){
			speed = 0;
		}

		// Add scroll event listener
		window.addEventListener("scroll", function() {
			// apply effect to each element
			for (var i = 0; parallax.length > i; i++) {

				// get measurements
				var parallaxContainer = parallax[i].parentElement;
				var parentHeight = parallaxContainer.scrollHeight;
				var parentTopOfElem = parallaxContainer.getBoundingClientRect().top;
				var elemOffsetTop = (window.innerHeight - parentHeight) / 2;

				// determine height
				var bgHeight = parentHeight + ((elemOffsetTop - (elemOffsetTop / speed)) * 2);
				parallax[i].style.height = bgHeight + 'px';

				// set speed
				var bgScroll = parentTopOfElem / speed;
				parallax[i].style.top = bgScroll + 'px';

			}
		});
	};


	// Ready all elements
	this.init = function(param) {
		if(typeof param === 'undefined') {
			param = {}
		}

		param = {
			speed: typeof param.speed !== 'undefined' ? param.speed : 4,
			className: typeof param.className !== 'undefined' ? param.className : 'parallax'
		}
		var parallax = document.getElementsByClassName(param.className);

		for (var i = 0; parallax.length > i; i++) {
			// make container div
			var wrapper = document.createElement('div');
			parallax[i].parentNode.insertBefore(wrapper, parallax[i]);
			wrapper.appendChild(parallax[i]);
			var parallaxContainer = parallax[i].parentElement;
			parallaxContainer.className += 'parallax--container';
			// parent elem need position: relative for effect to work - if not already defined, add it
			if (window.getComputedStyle(parallaxContainer.parentElement, null).getPropertyValue('position') !== 'relative') {
				this.style.position = 'relative';
			}

			var imgData = parallax[i].dataset.parallaxImage;
			// add image to div if none is specified
			if(typeof imgData !== 'undefined') {
				parallax[i].style.backgroundImage = 'url('+imgData+')';
				// if no other class than .parallax is specified, add CSS
				if(parallax[i].classList.length === 1 && parallax[i].classList[0] === 'parallax') {
					Object.assign(parallax[i].style,{
						'background-repeat':'no-repeat',
						'background-position':'center',
						'background-size':'cover'
					});
				}
			}
		};

		// when init completed, run function
		up(parallax, param.speed);
	};
};
