import dataTypeCheck from '../src/dataTypeCheck'

export default function collatz(number) {

  if(!dataTypeCheck(number,'number')) {
    return "Wrong Data Type"
  }

  let collatzArray = []
  collatzArray.push(number)
    while(number > 1) {
      if(number % 2 !== 0) {
        number = number * 3 + 1
        collatzArray.push(number)
      }
      else {
        number = number / 2
        collatzArray.push(number)
      }
    }
    return collatzArray
  }
