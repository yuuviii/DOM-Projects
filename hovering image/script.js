// let eelm  = document.querySelector("#elm1")                                // for one image
// let image = document.querySelector("#elm1 img")
// eelm.addEventListener("mousemove",function(dets){
//     image.style.left = dets.x+"px"
//     image.style.top = dets.y+"px"
    
// })
// eelm.addEventListener("mouseenter",function(){
//     image.style.opacity = 1
    
// })
// eelm.addEventListener("mouseleave", function () {
//   image.style.opacity = 0;
// });

let eelm = document.querySelectorAll(".elm")
eelm.forEach(function(val){

val.addEventListener("mouseenter",function(){
    val.childNodes[1].style.opacity=1
    
    
})
val.addEventListener("mouseleave", function () {  
    val.childNodes[1].style.overflow= "hidden"
    val.childNodes[1].style.opacity=0
});
val.addEventListener("mousemove", function (dets) {
  val.childNodes[1].style.left=dets.x+"px"
  val.childNodes[1].style.top=dets.y+"px"
});
})

