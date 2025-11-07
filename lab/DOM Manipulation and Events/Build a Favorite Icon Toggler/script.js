const btns=document.querySelectorAll(".favorite-icon")

btns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
   const toggle= btn.classList.toggle("filled")
    if (toggle){
      btn.innerHTML=` &#10084;`
    }else{
      btn.innerHTML=`&#9825;`
    }
  })
})