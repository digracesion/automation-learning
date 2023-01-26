var assert = require('assert');

describe("Mocha Hooks", function(){
    before('Execute Before All Tests', function(){
        console.log('Execute this part before executing all of the tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute this part before executing each test');
    });

    after('Execute After All Tests', function(){
        console.log('Execute this part after executing all of the tests');
    });

    afterEach('Execute After Each Test', function(){
        console.log('Execute this part after executing each test');
    });

    it('Mocha Hooks Test 1 - return -1 when the value is not present', function(){
        assert.equal([1, 2, 3].indexOf(5), -1);
    });
    it('Mocha Hooks Test 2 - return 0 when the value is present', function(){
        console.log('Second iteration of mocha hooks test');
        assert.equal([1, 2, 3].indexOf(1), 0);
    });
});