const galleryItems = document.querySelectorAll(".gallery-item")
const lightbox=document.querySelector(".lightbox")
const lightboxImage=document.getElementById("lightbox-image")
const btnClose = document.getElementById("close-btn")

const handleImg=(imgSrc)=>{
  
  const deleteThumbnail=imgSrc.replace("-thumbnail","")
  return deleteThumbnail
}

const itemsApply = (src)=>{
lightbox.style.display='flex';
lightboxImage.setAttribute("src",handleImg(src))
}

galleryItems.forEach((gallery)=>{
  gallery.addEventListener('click',(e)=>{
    itemsApply(e.target.src)
  })
})

lightbox.addEventListener('click',()=>{
  if (lightbox.style.display!=='none'){
    lightbox.style.display="none"
  }
})
btnClose.addEventListener('click',()=>{
  if (lightbox.style.display!=='none'){
    lightbox.style.display="none"
  }
})