export default function mergeSort(toSort){
  let currentLevel = []
  toSort.map( function(number){
    let subArray = []
    subArray.push(number)
    currentLevel.push(subArray)
  })
  let nextLevel = []

  while(currentLevel.length > 1){
    for(let i = 0; i < currentLevel.length; i+=2){
      let subArray = [],
        current = currentLevel[i],
        next = currentLevel[i+1]

      while(current.length && next && next.length){
        if (current[0] <= next[0]) {
          subArray.push(current.shift())
        }
        else{
          subArray.push(next.shift())
        }
      }

      while(current.length){
        subArray.push(current.shift())
      }

      while(next && next.length){
        subArray.push(next.shift())
      }

      nextLevel.push(subArray)
    }

    currentLevel = nextLevel
    nextLevel = []
  }
  return currentLevel[0]


}
