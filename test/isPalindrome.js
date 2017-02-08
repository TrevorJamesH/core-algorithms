import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  context("Is given: radar", function(){
    it('should return true', function(){
      expect(isPalindrome('radar')).to.equal(true)
    })
  })

  context("Is given: 123454321", function(){
    it('should return true', function(){
      expect(isPalindrome('123454321')).to.equal(true)
    })
  })

  context("Is given: A man, a plan, a canal: Panama", function(){
    it('should return true', function(){
      expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
    })
  })

  context("Is given: boat", function(){
    it('should return false', function(){
      expect(isPalindrome('boat')).to.equal(false)
    })
  })

  context("Is given: Palindrome", function(){
    it('should return false', function(){
      expect(isPalindrome('Palindrome')).to.equal(false)
    })
  })
})
