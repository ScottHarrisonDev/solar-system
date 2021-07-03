process.env.NODE_ENV = "test";

let rewire = require("rewire");
let chai = require("chai");
let should = chai.should();

const service = rewire('../../build/src/services/planets.service.js');

const getStartPageIndex = service.__get__('getStartPageIndex');

describe('getStartPageIndex', function() {
  it('should output the correct value given valid inputs', function(done) {
    getStartPageIndex(1,10).should.equal(0);
    getStartPageIndex(2,10).should.equal(10);
    getStartPageIndex(7,2).should.equal(12);
    done();
  });
});

const getEndPageIndex = service.__get__('getEndPageIndex');

describe('getEndPageIndex', function() {
  it('should output the correct value given valid inputs', function(done) {
    getEndPageIndex(0,10).should.equal(10);
    getEndPageIndex(10,10).should.equal(20);
    getEndPageIndex(12,2).should.equal(14);
    done();
  });
});
