'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ProjectsCtrl', function () {
this.link = 'View Project';
this.projects = {
	'Happy Hour App': {
		info:'A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs. ',
		img:'images/map.jpg',
		projectView: 'https://github.com/henrybarnacle/Neighborhood-Map-project'
	},
	'Stock Search': {
		info: 'A stock price search app. Search for any stock using the relevant stock code in the search bar. The most recent closing price will be returned as well as the stock\'s performance over the past week, month and year. Built with AngularJS accessing the Quandl API for stock data',
		img: 'images/stock.jpg',
		projectView:'https://github.com/henrybarnacle/stock-picker-app'
	},
	'Photographer Website': {
		info:"A baby photographer's portfolio site. Built with AngularJS for ease/speed of navigation and to achieve separation of concerns, with a mobile first approach, incorporating bootstrap for responsive design.",
		img: 'images/mollian_photog.jpg',
		projectView:'https://github.com/henrybarnacle/baby-photographer-website'
	},
	'Client Panel': {
		info: 'A business app to keep track of client payments, built with Angular4 and using Google Firebase for data storage. Clients can be added edited and deleted and app has login/out capability as well as some Auth. Security.',
		img: 'images/clientPanel.jpg',
		projectView: 'https://github.com/henrybarnacle/clientPanel'
	}
  };
});
