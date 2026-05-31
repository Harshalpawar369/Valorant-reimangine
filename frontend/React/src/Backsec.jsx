import React from "react";
import "./css/Backsec.css";
import valoshoot from "./assets/video/valoshoot.gif";
import Shootval from "./assets/video/Shootval.gif";
import gemini from "./assets/video/gemini.gif";
import sky from "./assets/image/sky.jpg";
import clone from "./assets/image/clone.png";
import phonix from "./assets/image/phonix.jpg";
import valorant from "./assets/image/valorant.jpg";
import gas from "./assets/image/7469.jpg"
import ui from "./assets/image/ui.jpg"
import igv from "./assets/video/igv.mp4"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Backsec() {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay:0.7,
      scrollTrigger: {
        trigger: ".sec1",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "+=3000",
        
      },
    });

    tl.to(".txt-img", { scale: 15, opacity: 0 }).to(
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

    tl.to(".sec1", { backgroundColor: "#ffffff" });

    tl.to(
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

    tl.to(".media-6", {
      scale: 0.5,
      y: 180,
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
  }, []);

  return (
    <>
      <div className="sec1">
        <div className="txt-img">
          <p>Calm Before</p>
          <p>The Storm</p>
        </div>

        <div className="media-container">
          <div className="media-item media-1 inward">
            <img src={gas} alt="" />
          </div>
          <div className="media-item media-2 left-inward">
            <img src={valorant} alt="" />
          </div>
          <div className="media-item media-3 right-inward">
            <img src={phonix} alt="" />
          </div>
          <div className="media-item media-4 inward">
            <img src={clone} alt="" />
          </div>
          <div className="media-item media-5 left-inward">
            <img src={ui} alt="" />
          </div>
          <div className="media-item media-6 ">
            <img src={sky} alt="" />
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
          <video src= {igv} muted autoPlay loop playsInline></video>
        </div>
      </div>
    </>
  );
}

export default Backsec;
