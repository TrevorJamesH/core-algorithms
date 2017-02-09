import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe.only('closestPair()', function(){
  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })

  it('should return the shortest distance between two points', function(){
    const points = [[2,1],[4,0],[-1,0],[5,3],[-2,5],[3,-3],[-2,0],[3,4],[5,-4],[0,-2]]
    expect(closestPair(points)).to.eql({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })
})
