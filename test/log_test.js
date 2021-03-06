
var Lab = require('lab');
var Log = require('../lib/log');

// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;

describe('Log', function () {

	describe('get', function () {

		it('reads a log file from the beginning', function (done) {

			var expectedResult = [ { event: 'request',
			    timestamp: 1369328753222,
			    id: '1369328753222-42369-62002',
			    instance: 'http://localhost:8080',
			    labels: [ 'api', 'http' ],
			    method: 'get',
			    path: '/test',
			    query: {},
			    source: { remoteAddress: '127.0.0.1' },
			    responseTime: 9,
			    statusCode: 200 },
			  { event: 'request',
			    timestamp: 1469328953222,
			    id: '1469328953222-42369-62002',
			    instance: 'http://localhost:8080',
			    labels: [ 'api', 'http' ],
			    method: 'get',
			    path: '/test2',
			    query: {},
			    source: { remoteAddress: '127.0.0.1' },
			    responseTime: 19,
			    statusCode: 200 } 
		    ]

			Log.get('test/fixtures/request.log', 0, function (bytesRead, result) {

				expect(bytesRead).to.eql(1261);
				expect(result).to.eql(expectedResult);
				done();
			});
		});

		it('doesn\'t loads a log file', function (done) {
			throw new Error();
			done();
		});

	});
});