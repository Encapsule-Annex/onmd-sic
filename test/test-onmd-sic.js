// test-onmd-sic.js
//
// A cursory test of the SiC data model to ensure that it loads.
//

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

describe("Load the onmd-sic package.", function() {
    var onmdSiC = null;
    before(function() {
        onmdSiC = require('../index');
    });
    it("The onmd-sic package module should have loaded.", function() {
        assert.isNotNull(onmdSiC);
        assert.isObject(onmdSiC);
    });
    describe("Instantiate a onm.Model instance for SiC.", function() {
        var modelSiC = null;
        before(function() {
            modelSiC = new onmdSiC.dependencies.onm.Model(onmdSiC.onmDataModelDeclaration);
        });
        it("The SiC data model declaration should have parsed.", function() {
            assert.isNotNull(modelSiC);
        });
        it("A new SiC onm.Model object should have been constructed.", function() {
            assert.instanceOf(modelSiC, onmdSiC.dependencies.onm.Model);
        });
    });
});