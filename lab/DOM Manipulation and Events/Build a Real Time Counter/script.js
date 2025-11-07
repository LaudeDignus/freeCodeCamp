const textarea= document.getElementById("text-input")
const charCount = document.getElementById("count")
const pCount=document.getElementById("char-count")

const countEl = ()=>{
  const lengthText=textarea.value.length
  if (lengthText<=100){
    charCount.innerText=`${lengthText}/100`
    charCount.classList.remove("red")
  }else{
    charCount.classList.add("red")
    textarea.value=textarea.value.slice(0,100)
  }
}

textarea.addEventListener('input',
  countEl
)