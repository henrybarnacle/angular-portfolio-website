

'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  	.state('home', {
  		url: '/',
  		templateUrl: 'views/home.html',
      controller: 'HomeCtrl as home'

  	})
  	.state('about', {
  		url: '/about',
  		templateUrl: 'views/about.html',
  		controller: 'AboutCtrl as about'
  	})
  	.state('projects', {
  		url: '/projects',
  		templateUrl: 'views/projects.html',
  		controller: 'ProjectsCtrl as project'
  	})
  	.state('contact', {
  		url: '/contact',
  		templateUrl: 'views/contact.html',
  		controller: 'ContactCtrl as contact'
  	});
 }]);


