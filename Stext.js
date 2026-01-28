window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            repeat: Infinity,
            duration: 4,
            ease: "none"
        })

        gsap.to(".marque img",{
            rotate:180
        })
    } else {
        gsap.to(".marque", {
            transform: "translateX(0%)",
            repeat: Infinity,
            duration: 4,
            ease: "none"
        })
        gsap.to(".marque img",{
            rotate:0
        })
    }
    })