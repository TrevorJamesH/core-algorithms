export default function factorial(number) {



  if(number < 0 || isNaN(number)) {
    return undefined
  }
  if(number === 0) {
    return 1
  }
  return number * factorial(number-1)
}
