"use client";
import React, { useState } from 'react'

import "../css/style.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
function nav() {
   
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from(".nav", {
      y: -30,
      duration: 0.5,
      opacity: 0.3,
      delay: 0.5,
      
    });
    t1.from(".head a", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.2,
    });
  });


    const [a, setA] = useState(false);
  return (
   <>
   <div className="nav">
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" height="35" viewBox="0 0 100 100" width="35">
    <path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#fff">
      </path>
      </svg></div>
    <div className="icon">
        <div onClick={() => setA(!a)}>
      <img src="/assets/image/Menu.png" alt="" width={10} height={15}/>
        </div></div>
   
   
        <div className={`head ${a ? 'active' : ''}`}>
         
         <div><Link href="/">Home</Link></div>
        <div><Link href="/about">About</Link></div>
        <div><Link href="/community">Community</Link></div>
        <div><a href="#"> </a></div>  
      
    </div>
        
       
    </div>
   
   </>
  )
}

export default nav
