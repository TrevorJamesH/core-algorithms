export default function fibonacci(n){
  let fib = []
  if(n===0){
    return fib
  }
  fib.push(0);
  if(n===1){
    return fib
  }
  fib.push(1);
  if(n===2){
    return fib
  }
  for(let i=2;i<n;i++){
    fib.push(fib[i-1]+fib[i-2])
  }
  return fib
}
