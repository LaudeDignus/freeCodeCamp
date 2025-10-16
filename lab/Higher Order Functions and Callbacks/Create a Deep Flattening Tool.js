const steamrollArray = (arr) =>{
  while(checkContainsArray(arr)){
    arr=flattened(arr)
  }
  return arr
}

const flattened = (arr)=>{
  let tab=[]
  for (let a of arr){
    if (Array.isArray(a)){
      tab.push(...a)
    }else{
      tab.push(a)
    }
  }
  return tab
}

const checkContainsArray = (arr)=>{
  return arr.some(Array.isArray)
}

console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))