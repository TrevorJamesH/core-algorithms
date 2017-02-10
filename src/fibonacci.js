import dataTypeCheck from '../src/dataTypeCheck'

export default function fibonacci(number){

  if(!dataTypeCheck(number,'number')) {
    return "Wrong Data Type"
  }

  let fib = []
  if(number === 0) {
    return fib
  }
  fib.push(0);
  if(number === 1) {
    return fib
  }
  fib.push(1);
  if(number === 2) {
    return fib
  }
  for(let i=2;i<number;i++) {
    fib.push(fib[i-1]+fib[i-2])
  }
  return fib
}
