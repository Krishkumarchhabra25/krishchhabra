import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Review from "./Components/Review"
import Skill from "./Components/Skill"
import Work from "./Components/Work"

import { gsap } from "gsap";

import { ReactLenis, useLenis } from 'lenis/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP , ScrollTrigger);


const App = () => {

  useGSAP(()=>{
     const elements = gsap.utils.toArray('.reveal-up');
     
     elements.forEach((element)=>{
      gsap.to(element ,{
        scrollTrigger:{
          trigger: element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub:true,

        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
     })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App
