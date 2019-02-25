var assert = require('chai').assert
var expect = require('chai').expect
const Libs = require('./../app/lib');

describe('Calculator Tests' , function(){
    it('returns 1 + 1 = 2' , function(){
        expect(Libs.sum(1,1)).to.equal(2);
    });
    it('returns 1 + 50 = 51' , function(){
        expect(Libs.sum(1,50)).to.equal(51);
    });
    it('returns 0 * 50 != 0' , function(){
        expect(Libs.multiple(0,50)).to.not.equal(50);
    });
});

describe('First Item' , function(){
    it('returns the First Element of an Array' , function(){
        let result = Libs.firstItem([1,2,3,4])
        expect(result).to.equal(1);
    });
});


describe('async test' , () => {
    it('callback : eventually returns the results' , (done) => {
        let input = [1,2,3,4,5,6,7,8,9];
        let filter = (item) => item % 2 == 0;
        Libs.delayedFilterwithCallback(input , filter , (result) => {
            assert.deepEqual(result , [2,4,6,8]);
            expect(result).to.deep.equal([2,4,6,8]);
            expect(result).to.have.lengthOf(4);
            done();
        });
    });

    it('Promise : eventually returns the results' , () => {
        let input = [1,2,3,4,5,6,7,8,9];
        let filter = (item) => item % 2 == 0;
        return Libs.delayedFilterwithPromise(input , filter).then(result => {
            expect(result).to.deep.equal([2,4,6,8]);
        });
    });

    it('async : eventually returns the results' , async () => {
        let input = [1,2,3,4,5,6,7,8,9];
        let filter = (item) => item % 2 == 1;
        let result = await Libs.delayedFilterwithPromise(input , filter);
        expect(result).to.deep.equal([1,3,5,7,9]);  
    });
});