import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function() {

  it('should be a function', function() {
    expect(setSymmetricDifference).to.be.a('function')
  })

  context("when given [1,2,3,4] and [3,4,5,6]", function() {
    it("should return [5,6]", function() {
      expect(setSymmetricDifference([1,2,3,4], [3,4,5,6])).to.eql([1,2,5,6])
    })
  })

  context("when given [5,4,3,2,1] and [2,3,4,5,6]", function() {
    it("should return [1,6]", function() {
      expect(setSymmetricDifference([5,4,3,2,1], [2,3,4,5,6])).to.eql([1,6])
    })
  })

  context("when given [1,2,3,4] and [9,7,0]", function() {
    it("should return [1,2,3,4,9,7,0]", function() {
      expect(setSymmetricDifference([1,2,3,4], [9,7,0])).to.eql([1,2,3,4,9,7,0])
    })
  })

  context("when given [1,2,3,4] and []", function() {
    it("should return [1,2,3,4]", function() {
      expect(setSymmetricDifference([1,2,3,4], [])).to.eql([1,2,3,4])
    })
  })
})
