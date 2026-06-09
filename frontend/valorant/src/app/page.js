"use client";
import React from 'react'

import './css/style.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from "./components/nav"
import Footer from './components/footer'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Landingpage() {
  useGSAP(() => {
 let tl = gsap.timeline();
 tl.from(".text-hero",{
  y:20,
  opacity:0,
  scale:0.8,
  duration:1,
  delay:1
 })
 tl.from(".wel-text",{
  y:20,
  opacity:0,
  duration:1
 })
  const t1 = gsap.timeline({
      delay:0.7,
      scrollTrigger: {
        trigger: ".sec1",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "+=3000",
        
      },
    });

    t1.to(".txt-img", { scale: 15, opacity: 0 }).to(
      ".media-item",
      {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        rotate: 0,
        stagger: 0.2,
      },
      "<"
    );

    t1.to(".sec1", { backgroundColor: "#ffffff" });

    t1.to(
      ".media-item:not(.media-6)",
      {
        x: () => {
          const m6 = document.querySelector(".media-6");
          const rect = m6.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2 - window.innerWidth / 2;
          return -centerX;
        },
        y: () => {
          const m6 = document.querySelector(".media-6");
          const rect = m6.getBoundingClientRect();
          const centerY = rect.top + rect.height / 2 - window.innerHeight / 2;
          return -centerY;
        },
        scale: 0,
        opacity: 0,
        zIndex: -1,
        duration: 0.2,
      },
      "<"
    );

    t1.to(".media-6", {
      scale: 0.5,
      y: 100,
      duration: 0.2,
    })
      .to(".media6-quote", {
        opacity: 1,
        bottom: -10, 
        duration: 0.5,
      })
      .to(".parag", {
        opacity: 1,
        bottom: 10,
        duration: 0.5,
        stagger: 0.5,
      });
  });
  return (
   <div>
    <Navbar/>
   <div className='img-hero'>
     <img src="/assets/image/hero.png" alt="ERROR 404"   className='imgu' />
     <div className='text-hero'><h1>Hello</h1>
     <p className='wel-text'>Welocome to our website Valorant</p></div>
   </div>
    <div className="sec1">
        <div className="txt-img">
          <p>Calm Before</p>
          <p>The Storm</p>
        </div>

        <div className="media-container">
          <div className="media-item media-1 inward">
            <img src="/assets/image/7469.jpg" alt="" />
          </div>
          <div className="media-item media-2 left-inward">
            <img src="/assets/image/valorant.jpg" alt="" />
          </div>
          <div className="media-item media-3 right-inward">
            <img src="/assets/image/phonix.jpg" alt="" />
          </div>
          <div className="media-item media-4 inward">
            <img src="/assets/image/clone.png" alt="" />
          </div>
          <div className="media-item media-5 left-inward">
            <img src="/assets/image/ui.jpg" alt="" />
          </div>
          <div className="media-item media-6 ">
            <img src="/assets/image/sky.jpg" alt="" />
            <div className="media6-quote">
              In the silence, legends are born.
            </div>
          </div>
          <div className="parag">
            <p>
              <strong>Your Next Clutch Starts Here</strong>
            </p>
          </div>
        </div>
      </div>
      <div
        className="txt-con"
        style={{ width: "100%", height: "100vh" }}
      >
        <p>
          Experience the ultimate tactical shooter where precision is king.
          Valorant is a high-stakes game of inches and milliseconds, where
          superior strategy and flawless aim are rewarded above all else. Master
          your agent, coordinate with your team, and prepare for a
          pulse-pounding contest of skill. Every round is a chance to define
          your legacy and feel the unmatched thrill of victory.
        </p>
        <div className="video-container left-inward">
          <video src="/assets/video/igv.mp4" muted autoPlay loop playsInline></video>
        </div>
      </div>
   

    <Footer/>
   </div>
  )
}

export default Landingpage