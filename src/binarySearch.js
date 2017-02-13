import dataTypeCheck from '../src/dataTypeCheck'

export default function binarySearch(array, targetValue) {

	if(!dataTypeCheck(array,'array')) {
		return "Wrong Data Type"
	}
	let min = 0;
	let max = array.length - 1;
  let guess
  while(max > min) {
  	guess = Math.round((max + min) / 2);
    if(array[guess] === targetValue){
      return guess
    }
    if(array[guess] < targetValue) {
      min = guess + .5
    }
    else if(array[guess] > targetValue) {
      max = guess - .5
    }
  }
return false;
}
