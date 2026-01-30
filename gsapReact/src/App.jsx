import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const App = () => {

  const [position, setposition] = useState(0);

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     y:200,
  //     duration:2,
  //     delay:1,
  //     opacity:0
  //   })
  // })

  // const boxref= useRef();

  // const containerref=useRef();

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     y:200,
  //     duration:2,
  //     delay:1,
  //     opacity:0
  //   })
  // },{scope:containerref})

  const { contextSafe } = useGSAP()

  const move = contextSafe(function () {
    gsap.to(".circle", {
      x: position,
      duration: 0.5,
      delay: 0.1
    });
  })

  const movecircle = function () {
    const random = gsap.utils.random(-500, 500, 100);
    setposition(random);
    move();
  };



  return (
    <main>
      {/* 
    //   <div ref={containerref} className="container">
    //     <div className="circle"></div>
    //     <div  className="box"></div>
    //   </div>

 
    //     <div className="other">
    //     <div className="circle"></div>
    //     <div  className="box"></div>
    //   </div> */}

      <button onClick={movecircle}>Move</button>
      <div className="circle"></div>
    </main>

  )
}

export default App