let istatus = document.querySelector("h2")
let addfriend = document.querySelector("#add")
let check = 0
addfriend.addEventListener("click",function(){
    if(check==0){
        istatus.textContent = "friends"
        istatus.style.color = "blue"
        addfriend.textContent = "remove friend"
        check = 1
         alert("you're friends now")
        }else{    
            istatus.textContent = "stranger"
            istatus.style.color = "red"
            addfriend.textContent = "add friends"
            check = 0
            alert("now focus on your goal")
    }
})

