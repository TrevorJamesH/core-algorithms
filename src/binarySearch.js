//takes a presorted array and a number
//check the middle number and see if the input search number is higher or lower
//check for number in the direction the previous logic returns- higher or lower
//return the position in the array

export default function binarySearch(array, targetValue){
	let min = 0;
	let max = array.length - 1;
  let guess
    while(max > min) {
    guess = Math.round((max + min) / 2);
    console.log('guess: ' + guess)
    if(array[guess] === targetValue){
        return guess
    }
    if(array[guess] < targetValue){
        min = guess + .5
    }
    else if(array[guess] > targetValue){
        max = guess - .5
    }
  }

    return false;
    }
