// gsap.from("#page1 .box",{
//     scale:2,
//     delay:2,
//     rotate:360,
//     duration:5
// })


// gsap.from("#page2 .box",{
//     scale:2,
//     delay:2,
//     rotate:720,
//     duration:5,
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:4,
//         pin:true
//     }
// })

// gsap.from("#page3 .box",{
//     scale:2,
//     delay:2,
//     rotate:360,
//     duration:5
// })

gsap.to("#page2 h2", {
    x: "-150%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin:true
    }
});
