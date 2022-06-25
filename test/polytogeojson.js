var polytogeojson = require('../lib/polytogeojson.js');

var assert = require('assert');
var fs = require('fs');

describe('#polytogeojson', function () {
    it('austria.poly', function () {
        test('test/data/austria.poly', 'test/data/austria.geojson');
    });
    it('north-america.poly', function () {
        test('test/data/north-america.poly', 'test/data/north-america.geojson');
    });
    it('complex.poly', function () {
        test('test/data/complex.poly', 'test/data/complex.geojson');
    });
});

function test(actual, expected) {
    var poly = polytogeojson(fs.readFileSync(actual, { encoding: 'utf8' }));
		
    assert.deepEqual(poly, JSON.parse(fs.readFileSync(expected)));
}
