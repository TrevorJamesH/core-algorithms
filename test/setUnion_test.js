import { expect } from 'chai'
import setUnion from '../src/setUnion.js'

describe('setUnion()', function(){
  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })
  it('should return the union between two arrays', function(){
    expect(setUnion([1, 2, 3, 4],[2, 4, 6, 8])).to.eql([1,2,3,4,6,8])
    expect(setUnion([4, 8, 2, 4],[0, 7, 4, 3])).to.eql([0,2,3,4,7,8])
  })
})
