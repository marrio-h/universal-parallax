/**
* @version 1.0.11
* @author Marius Hansen <marius.o.hansen@gmail.com>
* @license MIT
* @description Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms. Based on goodparallax
* @copyright © Marius Hansen 2018
*/

// determine height
function calculateHeight(parallax, speed) {
	for (var i = 0; parallax.length > i; i++) {
		var parentHeight = parallax[i].parentElement.scrollHeight;
		var elemOffsetTop = (window.innerHeight - parentHeight) / 2;

		var bgHeight = parentHeight + ((elemOffsetTop - (elemOffsetTop / speed)) * 2);
		parallax[i].style.height = bgHeight + 'px';
	}
}

// set speed
function animateParallax(parallax, speed){
	for (var i = 0; parallax.length > i; i++) {
		var parentTopOfElem = parallax[i].parentElement.getBoundingClientRect().top;

		var bgScroll = parentTopOfElem / speed;
		parallax[i].style.top = bgScroll + 'px';
	}
}


var universalParallax = function() {

	var up = function(parallax, speed) {

		if(speed < 1.2){
			speed = 0;
		}

		if (/Mobi/.test(navigator.userAgent)) {
			pageHeight = screen.height;
		}else{
			pageHeight = window.innerHeight;
		}


		// determine height
		calculateHeight(parallax, speed);
		// recalculate on resize
		window.addEventListener("resize", function() {
			calculateHeight(parallax, speed);
		});


		// Add scroll event listener
		window.addEventListener("scroll", function() {
			// apply effect to each element
			animateParallax(parallax, speed);
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
