let menu=document.querySelector("#nav i")
let cross=document.querySelector("#full i")



menu.addEventListener("click",function(){
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})


var tl=gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.5
})


tl.from("#full h4",{
    x:150,
    duration:0.5,
    stagger:0.20,
    opacity:0
})

tl.from("#full i",{
    opacity:0
})

tl.pause()

