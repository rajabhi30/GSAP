var path="M 0 80 Q 639 80 1278  80"

var finalpath="M 0 80 Q 639 80 1278  80"

var string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path=`M 0 80 Q ${dets.x} ${dets.y} 1278  80`

    gsap.to("svg path",{
        attr:{d:path} ,
        duration:0.2,
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath}, 
        ease: "elastic.out(1.75,0.2)",
        duration:1.5
    })
})