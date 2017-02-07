// If n is even, divide it by 2 to get n / 2. If n is odd, multiply it by 3 and add 1 to obtain 3n + 1. Repeat the process until you reach 1.
export default function collatz(n){

  let collatzArray = []
  collatzArray.push(n)
    while(n > 1){
      if(n % 2 !== 0){
        n = n * 3 + 1
        collatzArray.push(n)
      }
      else {
        n = n / 2
        collatzArray.push(n)
      }
    }
    return collatzArray
  }
