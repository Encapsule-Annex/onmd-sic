// test-onmd-sic.js
//
// A cursory test of the SiC data model to ensure that it loads.
//

var Mocha = require('mocha');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var onm = require('onm');
var testDataModelDeclaration = require('onm/test/fixture/test-shared-onmd-generic-suite');

var onmdSiC = require('../index');

describe("Load the onmd-sic package.", function() {

    it("The onmd-sic module should have loaded.", function() {
        assert.isNotNull(onmdSiC);
        assert.isObject(onmdSiC);
    });

    it("The onmd-sic module should export object 'dependencies'.", function() {
        assert.property(onmdSiC, 'dependencies');
    });

    it("The onmd-sic module should export object 'onmDataModelDeclaration'.", function() {
        assert.property(onmdSiC, 'onmDataModelDeclaration');
    });

    testDataModelDeclaration(onmdSiC.onmDataModelDeclaration);

});