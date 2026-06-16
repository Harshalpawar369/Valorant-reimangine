"use client";

import React, { useRef } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../css/community.css";
import { ReactLenis } from 'lenis/react';

// Register ScrollTrigger outside the component
gsap.registerPlugin(ScrollTrigger);

function Community() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Dummy data for wallpapers
  const wallpapers = [
    { id: 1, src: "/assets/image/valo1.jpg", title: "Neon Surge" },
    { id: 2, src: "/assets/image/valo2.jpg", title: "Jett Knives" },
    { id: 3, src: "/assets/image/valo3.jpg", title: "Omen Shadows" },
    { id: 4, src: "/assets/image/valo4.jpg", title: "Viper Pit" },
  ];

  useGSAP(() => {
    const video = videoRef.current;

    // 1. Video Scrubbing Animation (Video plays forward as you scroll down)
    // Note: The video needs to be loaded to know its duration
    video.onloadedmetadata = () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: ".community-container",
          start: "top top", // Starts when container hits the top of the screen
          end: "bottom bottom", // Ends when the container ends
          scrub: 1, // Smoothly links video playback to scrollbar
        },
      });
    };

    // 2. Paragraph Slide-Up Animation
    gsap.from(".content-text p", {
      y: 100, // Starts 100px down
      opacity: 0, // Starts invisible
      duration: 1,
      stagger: 0.3, // Animates one after the other
      scrollTrigger: {
        trigger: ".content-text",
        start: "top 80%", // Triggers when the text container is 80% down the screen
        toggleActions: "play none none reverse", // Plays on scroll down, reverses on scroll up
      },
    });

    // 3. Post Container Fade In
    gsap.from(".post-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".post-container",
        start: "top 85%",
      },
    });
  }, { scope: containerRef }); // Scope animations to this specific component

  return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
    <div ref={containerRef}>
      <Navbar />
      
      <div className="community-container">

        <video
          ref={videoRef}
          src="/assets/video/valo7.mp4"
          className="communityVideo"
          muted
          playsInline
     
        ></video>

        <div className="community-content">
          <h1 className="content-header">Join the community</h1>

          <div className="content-text">
            <p className="content-paragraph1">
              Step into a world where teamwork isn't just a feature—it's the
              foundation of every victory. The true magic of Valorant unfolds in
              the synergy between agents, the crucial callouts, and the shared
              strategy that leads to a round win. It’s about trusting your
              teammates to have your back as you push a site and combining unique
              abilities to overcome any obstacle. Every match is an opportunity to
              build camaraderie and celebrate those hard-earned wins together,
              forging an experience that’s as much about community as it is about
              competition.
            </p>
            <p className="content-paragraph2">
              Step into a world where teamwork isn't just a feature—it's the
              foundation of every victory. The true magic of Valorant unfolds in
              the synergy between agents, the crucial callouts, and the shared
              strategy that leads to a round win. It’s about trusting your
              teammates to have your back as you push a site and combining unique
              abilities to overcome any obstacle. Every match is an opportunity to
              build camaraderie and celebrate those hard-earned wins together,
              forging an experience that’s as much about community as it is about
              competition.
            </p>
          </div>

       
          <div className="post-container">
            <h2 className="wallpaper-title">Community Wallpapers</h2>
            
            <div className="wallpaper-scroll-wrapper">
              {wallpapers.map((wp) => (
                <div key={wp.id} className="wallpaper-card">
                
                  <img src={wp.src} alt={wp.title} className="wallpaper-img" />
                  
                  <div className="wallpaper-actions">
                    <span className="wallpaper-name">{wp.title}</span>
                    <div className="action-buttons">
                      <button className="btn-like">👍</button>
                      <button className="btn-dislike">👎</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
    </ReactLenis>
  );
}

export default Community;