let rect = document.querySelector("#center")
rect.addEventListener("mousemove",function(details){
  let rectanglelocation = rect.getBoundingClientRect()
   let insiderect = details.clientX-rectanglelocation.left
  if(insiderect<rectanglelocation.width/2){
       let redcolor = gsap.utils.mapRange(
        0,rectanglelocation.width/2,255,0,insiderect
       )
       gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:Power4,
       })
    }else{
      let bluecolor = gsap.utils.mapRange(
        rectanglelocation.width / 2,
        rectanglelocation.width,
        0,
        255,
        insiderect
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0,0, ${bluecolor})`,
        ease: Power4,
      });
      

  }
})
rect.addEventListener("mouseleave", function(){
 gsap.to(rect,{
  backgroundColor:"white",
 })

});