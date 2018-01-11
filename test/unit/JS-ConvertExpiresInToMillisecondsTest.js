var expect = require('chai').expect;
var sinon = require('sinon');

var moduleLoader = require('./common/moduleLoader.js');
var mockFactory = require('./common/mockFactory.js');

var js = "../../../apiproxy/resources/jsc/JS-ConvertExpiresInToMilliseconds.js";

describe('feature: convert seconds to milliseconds', function() {

	it('should convert seconds to milliseconds', function(done) {
		var mock = mockFactory.getMock();

		mock.contextGetVariableMethod.withArgs('L7AccessTokenExpiration').returns('86400');

		moduleLoader.load(js, function(err) {
			expect(err).to.be.undefined;	
			expect(mock.contextSetVariableMethod.called).to.equal(true);
			expect(mock.contextSetVariableMethod.firstCall.args[1]).to.equal('86400000');
			done();
		});
	});

});
