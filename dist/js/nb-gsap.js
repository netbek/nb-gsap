/**
 * AngularJS wrapper for GreenSock-JS
 *
 * @author Hein Bekker <hein@netbek.co.za>
 * @copyright (c) 2015 Hein Bekker
 * @license http://www.gnu.org/licenses/agpl-3.0.txt AGPLv3
 */

(function (window, angular, undefined) {
	'use strict';

	// Classes defined by GSAP TweenMax:
	// Back, BackIn, BackInOut, BackOut, BezierPlugin, Bounce, BounceIn,
	// BounceInOut, BounceOut, CSSPlugin, Circ, CircIn, CircInOut, CircOut,
	// Cubic, Ease, EaseLookup, Elastic, ElasticIn, ElasticInOut, ElasticOut,
	// Expo, ExpoInOut, ExpoOut, Linear, Power0, Power1, Power2, Power3, Power4,
	// Quad, Quart, Quint, RoughEase, Sine, SineIn, SineInOut, SineOut, SlowMo,
	// SteppedEase, Strong, TimelineLite, TimelineMax, TweenLite, TweenMax,
	// TweenPlugin
	angular
		.module('nb.gsap', [])
		.factory('GSAP', ['$window', function ($window) {
				return $window.GreenSockGlobals;
			}]);
})(window, window.angular);