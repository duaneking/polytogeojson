var polytogeojson = require('../lib/polytogeojson.js');

var os = require("os");
var assert = require('assert');
var fs = require('fs');

describe('#polytogeojson', function () {
    it('austria.poly', function () {
        test('test/data/austria.poly', 'test/data/austria.geojson');
    });
    it('north-america.poly', function () {
        test('test/data/north-america.poly', 'test/data/north-america.geojson');
    });
    it('north-america-v2.poly', function () {
        test('test/data/north-america-v2.poly', 'test/data/north-america-v2.geojson');
    });
    it('complex.poly', function () {
        test('test/data/complex.poly', 'test/data/complex.geojson');
    });
});

/*
 * Actual Convert .poly to .geojson for one-off converts.
 */
function convert(actual, wanted) {
    var poly = polytogeojson(fs.readFileSync(actual, { encoding: 'utf8' }));
	var json = JSON.stringify(poly);

	fs.writeFileSync(wanted, json + os.EOL);
}

function test(actual, expected) {
    var poly = polytogeojson(fs.readFileSync(actual, { encoding: 'utf8' }));
	var file = fs.readFileSync(expected);
	var json = JSON.parse(file);

    assert.deepEqual(poly, json);
}
