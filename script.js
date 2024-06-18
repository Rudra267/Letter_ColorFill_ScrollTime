var data = document.querySelectorAll('.text h1')

 function splitting(){
    
data.forEach((elem)=>{
    let updated = ""
  let splitting = elem.textContent.split("")
  splitting.forEach((char)=>{
    updated += `<span>${char}</span>`
    elem.innerHTML = updated 
  })
})
 }
 function changing(){
    gsap.to(".text h1 span",{
        color:"#E3E3C4",
        stagger:0.1,
        duration:1,
        scrollTrigger:{
            trigger:".text h1",
            scroll:"body",  
            start:"top 80%",
            markers:true,
            scrub:true,
        }
     })
}



splitting()
changing()