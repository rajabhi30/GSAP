// gsap.to(".box1",{
//     x:1000,
//     duration:2,
//     delay:2,
//     borderRadius:"50%",
//     backgroundColor:"yellow",
//     scale:0.5,
//     rotate:360,
//     repeat:-1,
//     yoyo:true 
// })

// gsap.from(".box2",{
//     x:1000,
//     duration:2,
//     delay:2,
//     borderRadius:"50%",
//     backgroundColor:"orange",
//     scale:0.5
// })

// gsap.from("h1",{
//     color:"black",
//     duration:4,
//     delay:1,
//     opacity:0, 
//     y:30,
//     stagger:1
// })


var t1=gsap.timeline();

// t1.to(".box1",{
//     x:1350,
//     duration:2,
//     delay:0.5
// })

// t1.to(".box2",{
//     x:1350,
//     duration:2,
//     delay:0.5
// })

// t1.to(".box3",{
//     x:1350,
//     duration:2,
//     delay:0.5
// })

t1.from("h1",{
    y:-20,
    duration:0.5,
    opacity:0,
    delay:1.5
})

t1.from("h4",{
    y:-20,
    duration:0.25,
    opacity:0,
    stagger:1
})

t1.to("h2",{
    opacity:4,
    scale:4
})