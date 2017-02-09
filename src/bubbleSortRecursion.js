export default function bubbleSort(numbers){
  let sorted = true
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i]>numbers[i+1]){
      numbers.splice(i+1,0,numbers.splice(i,1)[0])
      sorted = false
    }
  }
  if(sorted === false){
    bubbleSort(numbers)
  }
  return numbers
}
