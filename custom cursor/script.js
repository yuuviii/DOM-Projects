let page = document.getElementById("main")
let move = document.getElementById("cursor")
page.addEventListener("mousemove",function(dets){
    move.style.left = dets.x + "PX"
    move.style.top = dets.y + "PX"
    
})