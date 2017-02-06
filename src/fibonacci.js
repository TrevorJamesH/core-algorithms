export default function fibonacci(number){

let fibArray = [0,1]
  if ( number < 3 ){
    return fibArray;
  }

  for (let i = 2; i < number; i++) {
  fibArray[i] = fibArray[i-1] + fibArray[i-2]
  }
  return fibArray;
}
