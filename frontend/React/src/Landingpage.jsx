import React from 'react'
import hero from './assets/image/hero.png'
import './css/home.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
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
  })
  return (
   <>
   <div className='img-hero'>
     <img src= {hero} alt="ERROR 404"   className='imgu' />
     <div className='text-hero'><h1>Hello</h1>
     <p className='wel-text'>Welocome to our website Valorant</p></div>
   </div>
   

  
   </>
  )
}

export default Landingpage
