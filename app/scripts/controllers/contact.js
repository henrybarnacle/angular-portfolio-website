'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ContactCtrl', function () {

TweenMax.staggerFrom(".form-style-6", 2, {scale:0.8, opacity:0, delay:0, ease:Elastic.easeOut, force3D:true}, 0.2);


this.title = 'Contact Me!';
this.statement = 'henrybarnacle@yahoo.com';
this.namePLaceholder = 'Your Name';
this.emailPlaceholder = 'Your Email Address';
this.msgPlaceholder = 'Type Your Message';
this.send = 'Send';
  });
