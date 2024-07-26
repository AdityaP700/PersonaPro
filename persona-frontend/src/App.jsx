import React, { useState, useRef, useEffect } from "react"
import imgUrl from "./assets/main-img.png"
import Card from "./components/Card"
import CardContainer from "./components/CardContainer"
import Navbar from "./components/Navbar"
import TabsRender from "./components/Tabs"
import Lottie from 'react-lottie';
import animationData from './assets/TerminalAnimation.json';


function App() {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="scroll-smooth">
      <Navbar />

      {/* The div with the main textand the 3d model */}
      <div className="flex justify-center mt-32 mb-56 w-5/6 mx-auto items-end">
        <div className="flex flex-col justify-center">
          <div >
            <Lottie
              options={defaultLottieOptions}
              height={300}
              width={300}
            />
          </div>
          <div className="text-pretty my-auto text-center">
            {/* div having text... */}
            <h2 className="text-5xl font-black text-white tracking-wider font-nunito">
              At Persona AI We Believe In a World Where AI Is For Everyone
            </h2>
            <h4 className="text-4xl font-semibold text-purple-600 font-mono tracking-wider mt-4 font-nunito">
              Our mission? To empower you with the tools that unravel complexity, spark creativity, and redefine what's possible.
            </h4>

          </div>
        </div>

      <div className="flex justify-end items-center shrink-0">
        <img src={imgUrl} alt="not found" className="w-full" />
      </div>
      </div>



      <section className="flex flex-col justify-center ">
        <h2 className="font-nunito text-5xl text-white mb-20 text-center">Explore</h2>
        <CardContainer />
      </section>


      <section className="flex flex-col justify-center ">
        <h2 className="font-nunito text-5xl text-white mb-16 text-center">AI Tools</h2>
        <TabsRender />
      </section>
    </div>
  )
}

export default App
