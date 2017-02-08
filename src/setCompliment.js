export default function setCompliment(array, compliment){
  let result = []
  for(let i=0;i<compliment.length;i++){
    let toAdd = true
    for(let j=0;j<array.length;j++){
      if(compliment[i] === array[j]){
        toAdd = false
      }
    }
    if(toAdd === true){
      result.push(compliment[i])
    }
  }
  return result
}
