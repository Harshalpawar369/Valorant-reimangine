"use client";
import React, { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import "../css/about.css"

gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".character-img",
     
      start: "end 0%",
      scrub: 3,
      
      end:"+=550"
    }
  });
  t1.to(".character-img", {
    duration: 1,
    scale: 2.5,
    y: 1000,
    x: -1000,
    
  });
  t1.to(".tx",{
    opacity:1,
    duration:0.4,
    y:-30,
    stagger:0.5,
  });
  t1.to(".heading", {
    opacity:1,
    duration:0.3,
    scale:1.2,
    backgroundColor:"black",
    stagger:0.5,
    ease: "power3.out",
    onComplete: ()=>{
   gsap.to(".heading",{
   keyframes: [
        { backgroundColor: "#ff6600", duration: 0.3 },
        { backgroundColor: "#ff6600", duration: 0.3 },
        { backgroundColor: "#ff6600", duration: 0.3 },
        { backgroundColor: "#ff6600", duration: 0.3 }
      ],
   yoyo: true,  
    repeat: -1,
    repeatDelay: 0.3,
   })
    
    
    }

  })
  

    
 
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(textRef.current, {
            repeat: -1,
            repeatDelay: 2,
            keyframes: [
              { x: 2, skewX: 10, duration: 0.05 },
              { x: -2, skewX: -10, duration: 0.05 },
              { x: 0, skewX: 0, duration: 0.05 },
            ],
          });
        },
      }
    );

    
  
  }, []);

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="text" ref={textRef}>
        WANNA FIGHT
      </div>

      <div className="character">
        
        <img
          src="/assets/image/enoiz019r2t41.png"
          alt="Character"
          className="character-img"
        />
      </div>
      
    </div>
     <div className="jus">
      <p className="tx">Welcome to Radiant Gaming, 
      your dedicated hub for everything Valorant! We are a passionate community of players, 
      strategists, and fans united by our love for Riot Games' tactical 5v5 shooter. 
      Whether you're a seasoned Radiant aiming for the top, a budding 
      agent learning the ropes, or simply looking to dive deeper into 
      the lore and mechanics of Valorant, you've found your home.</p>
      </div>
     <div className="jus1"><div className="heading">
      <p className="color-text">WE ARE VALORANTValorant is a team-based first-person tactical
         hero shooter set in the near future.Blend your style and experience on a global,
          competitive stage. You have 13 rounds to attack and defend your side using 
          sharp gunplay and tactical abilities. And, with one life per-round, 
          you'll need to think faster than your opponent if you want to survive.
           Take on foes across Competitive and Unranked modes as well 
           as Deathmatch and Spike Rush. 
         </p></div></div>
     <Footer />
    </>
  )
}

export default About
