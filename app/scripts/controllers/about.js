'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function () {


//TweenMax.from(".outro", 1, {opacity:0,  scale:0.6, delay: 1.2, ease:Back}, 0.1);
TweenMax.from(".intro1", .5, { ease: Power4.easeOut, opacity:0, delay: 0, y: +25 });
TweenMax.from(".intro2", .5, { ease: Power4.easeOut, opacity:0, delay: 1, y: +25 });

TweenMax.staggerFrom(".pop", 2, {scale:0.8, opacity:0, delay:2, ease:Elastic.easeOut, force3D:true}, 0.2);
TweenMax.from(".outro", 2, { ease: Power4.easeOut, opacity:0, delay: 4, y: +25 });
TweenMax.from(".footer-image", 2, { ease: Power4.easeOut, opacity:0, delay: 5, y: +25 });

  this.intro1 = "Hi, I'm Henry. I'm a front‑end developer. I love to build interactive and responsive websites and apps utilizing the latest technologies.";
  this.intro2 = "I have a passion for building ideas and realizing concepts into outstanding digital experiences.";


 this.dev = {
 	'skills1': {
 		content: 'HTML5'
 		},
 	'skills2': {
 			content: 'CSS'
 		},
 	'skills3': {
 			content: 'Javascript'
 		},
 	'skills4': {
 			content: 'JQuery'
 		},
 	'skills5': {
 			content: 'Angular'
 		},
 	'skills6': {
 			content: 'Grunt'
 		},
 	'skills7': {
 			content: 'Git'
 		}
 
 	};

 	this.des = {
 		'skills1': {
 			content: 'Photoshop'
 		},
 		'skills2': {
 			content: 'Illustrator'
 		}
 	};

 	this.outro = "Originally from England, I’m now based in New York."
});
