import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function() {

  it('should be a function', function() {
    expect(factorial).to.be.a('function')
  })

  context("when given 7", function() {
    it("should return 5040", function() {
      expect(factorial(7)).to.equal(5040)
    })
  })

  context("when given 10", function() {
    it("should return 3628800", function() {
      expect(factorial(10)).to.equal(3628800)
    })
  })

  context("when given 0", function() {
    it("should return 1", function() {
      expect(factorial(0)).to.equal(1)
    })
  })

  context("when given -1", function() {
    it("should return undefined", function() {
      expect(factorial(-1)).to.equal(undefined)
    })

    context("when given a non number", function() {
      it("should return undefined", function() {
        expect(factorial([])).to.eql(NaN)
      })
  })
})
})
