var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor")
var image=document.querySelector("#image")
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease: "back.out(1.7)",
    })
})

image.addEventListener("mouseenter",function(e){
    gsap.to(cursor,{
        scale:2,
        backgroundColor:"#ffffff5c"
    })
})

image.addEventListener("mouseleave",function(e){
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"yellow"
    })
})