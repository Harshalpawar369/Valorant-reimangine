"use client";

import React, { useRef,useState } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../css/community.css";
import { ReactLenis } from "lenis/react";
import axiosApi from "../api/axiosApi.js";

gsap.registerPlugin(ScrollTrigger);

function Community() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [messages, setMessages] = useState([
  { role: "bot", text: "Hello! I'm Valorant-AI Bot. How can I assist you today?" }
]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {

    const response = await axiosApi.post("/ai", { message: input });
    
  setMessages((prev) => [
  ...prev,
  {
    role: "bot",
    text: response.data.response,
  },
]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Sorry, I'm having trouble connecting to the AI." }
    ]);
  } finally {
    setLoading(false);
  }
};

  const wallpapers = [
    { id: 1, src: "/assets/image/valo1.jpg", title: "Neon Surge" },
    { id: 2, src: "/assets/image/valo2.jpg", title: "Jett Knives" },
    { id: 3, src: "/assets/image/valo3.jpg", title: "Omen Shadows" },
    { id: 4, src: "/assets/image/valo4.jpg", title: "Viper Pit" },
  ];

  useGSAP(
    () => {
      

    
      gsap.from(".content-text p", {
        y: 100, 
        opacity: 0, 
        duration: 1,
        stagger: 0.3, 
        scrollTrigger: {
          trigger: ".content-text",
          start: "top 80%", 
          toggleActions: "play none none reverse", 
        },
      });

    
      gsap.from(".post-container", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".post-container",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div ref={containerRef}>
        <Navbar />

        <div className="community-container">
          <video
            ref={videoRef}
            src="/assets/video/communityVideo.mp4"
            className="communityVideo"
            muted
            autoPlay
            loop
             preload="metadata"
            playsInline
          ></video>

          <div className="community-content">
            <h1 className="content-header">Join the community</h1>

            <div className="content-text">
              <p className="content-paragraph1">
                Step into a world where teamwork isn't just a feature—it's the
                foundation of every victory. The true magic of Valorant unfolds
                in the synergy between agents, the crucial callouts, and the
                shared strategy that leads to a round win. It’s about trusting
                your teammates to have your back as you push a site and
                combining unique abilities to overcome any obstacle. Every match
                is an opportunity to build camaraderie and celebrate those
                hard-earned wins together, forging an experience that’s as much
                about community as it is about competition.
              </p>
              <p className="content-paragraph2">
                Step into a world where teamwork isn't just a feature—it's the
                foundation of every victory. The true magic of Valorant unfolds
                in the synergy between agents, the crucial callouts, and the
                shared strategy that leads to a round win. It’s about trusting
                your teammates to have your back as you push a site and
                combining unique abilities to overcome any obstacle. Every match
                is an opportunity to build camaraderie and celebrate those
                hard-earned wins together, forging an experience that’s as much
                about community as it is about competition.
              </p>
            </div>

            <div className="post-container">
              <h2 className="wallpaper-title">Community Wallpapers</h2>

              <div className="wallpaper-scroll-wrapper">
                {wallpapers.map((wp) => (
                  <div key={wp.id} className="wallpaper-card">
                    <img
                      src={wp.src}
                      alt={wp.title}
                      className="wallpaper-img"
                    />

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
            <div className="AI">
              <h2 className="AI-title"> Valornt-AI Bot</h2>
              <p className="AI-description">
                Meet Valorant-AI Bot, your ultimate gaming companion designed to
                elevate your Valorant experience. Whether you're looking to
                sharpen your skills, strategize for your next match, or simply
                have fun discussing all things Valorant, this AI bot is here to
                assist you. With its deep understanding of the game, it can
                provide insights on agent abilities, map strategies, and even
                help you analyze your gameplay to identify areas for
                improvement. Engage in dynamic conversations about the latest
                updates, share your favorite moments, or get personalized tips
                to enhance your performance. Valorant-AI Bot is not just a tool;
                it's a community member ready to support and engage with you on
                your Valorant journey.
              </p>
              <div className="AI-actions">
             
            <div className="chat-section">
            <div className="chat-messages">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`message ${
        msg.role === "user" ? "user-message" : "bot-message"
      }`}
    >
      <span className="message-sender">
        {msg.role === "user" ? "You" : "Valorant-AI Bot"}:
      </span>

      <span className="message-text">
        {msg.text}
      </span>
    </div>
  ))}

  {loading && (
    <div className="message bot-message">
      <span className="message-sender">
        Valorant-AI Bot:
      </span>
      <span className="message-text">
        Thinking...
      </span>
    </div>
  )}
</div>
          
              </div>
              <div className="chat-input">
               <input
  type="text"
  placeholder="Type your message..."
  className="chat-textbox"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
/>
                <button
  className="btn-send"
  onClick={sendMessage}
  disabled={loading}
>
  {loading ? "..." : "Send"}
</button>
            </div>
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
