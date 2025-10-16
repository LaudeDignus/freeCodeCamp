const checkPrime = (num)=>{
  const tab=[]
    for (let i=2;i<=Math.sqrt(num);i++){
      while(num%i===0){
        tab.push(i)
        num/=i
      }
    }
    if (num>1){
      tab.push(num)
    }
  return tab
}

const smallestCommons = (arr) =>{

  let objPrime={}

  arr.sort((a,b)=>a-b)

  const [first,last]=arr

  for (let i=first;i<=last;i++){
    for (const a of checkPrime(i)){
      const t=checkPrime(i).filter((ab)=>ab===a)
      if (!objPrime.hasOwnProperty(a)){
        objPrime[a]= t.length
        
      }else{
        if(objPrime[a]<t.length){
        objPrime[a]=t.length
        }
      }
    }
  }

  let result = 1;
  for (const obj in objPrime){
    result*=(obj**objPrime[obj])
  }

  return result
}

console.log(smallestCommons([23, 18]));

console.log(smallestCommons([2,10]))