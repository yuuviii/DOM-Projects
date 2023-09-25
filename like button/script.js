let cont = document.querySelector("#container");
let love = document.querySelector("i");
cont.addEventListener("dblclick",function(){
        // love.style.transform = 'translate(-50% ,-50%) scale(1);' // not working
        love.style.visibility='visible'
        setTimeout(function(){
            love.style.visibility='hidden'
        },1000)
})
