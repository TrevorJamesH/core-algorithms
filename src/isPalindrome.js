export default function isPalindrome(input){
  let firstString = input.toUpperCase().split('').filter((n)=>n.match(/[A-Za-z0-9]/)).join('')
  let secondString = firstString.split('').reverse().join('')
  return firstString === secondString
}
