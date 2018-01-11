/* jshint node:true */
'use strict';

var apickli = require('apickli');
var config = require('../../test-config.json');

console.log('oauth api: [' + config.oauth.domain + ', ' + config.oauth.basepath + ']');

module.exports = function() {
	// cleanup before every scenario
	this.Before(function(scenario, callback) {
		this.apickli = new apickli.Apickli('https',
										   config.oauth.domain + config.oauth.basepath,
										   './test/integration/features/fixtures/');
		callback();
	});
};
