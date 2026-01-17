function breakText() {
    let h1 = document.querySelector("h1");
    let text = h1.textContent;

    let splitedText = text.split("");

    var comine = "";

    var halfvalue=splitedText.length/2;
    splitedText.forEach(function (elem,idx) {
        if(idx<halfvalue){
            comine += `<span class="A">${elem}</span>`
        }
        else{
            comine += `<span class="B">${elem}</span>`
        }
    })

    h1.innerHTML = comine 
}

breakText();


gsap.from("h1 .A",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15
})

gsap.from("h1 .B",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15
})