export default function fizzBuzz() {

let fizzBuzzArray = []
  for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
      fizzBuzzArray.push('FizzBuzz')
    }
    else if(i % 3 === 0) {
    fizzBuzzArray.push('Fizz')
    }
    else if (i % 5 === 0) {
    fizzBuzzArray.push('Buzz')
    }
    else {
    fizzBuzzArray.push(i)
    }
  }
return fizzBuzzArray
}
