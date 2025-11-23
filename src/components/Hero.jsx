import { useState } from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"; // si tu as accès à SplitText

import '../styles/Hero.css'

gsap.registerPlugin(SplitText, ScrollTrigger);



function AnimatedTitle({ text }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    const chars = text.split("");

    // Crée un <span> par caractère
    el.innerHTML = chars.map(c => `<span className="animated-letter">${c}</span>`).join("");

    // Animation GSAP
    gsap.fromTo(
      el.querySelectorAll("span"),
      { opacity: 0, y: -20, scale: 1.1, filter: "blur(4px)" },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.out",
        }
    );
    }, [text]);


    

    
    return (
        <h1
        ref={titleRef}
        className="animated-title"
        ></h1>
    );
    }






    function Hero() {
        const subtitleRef = useRef();
        const imgRef = useRef();
        const sectionRef = useRef();
        const overlayRef = useRef();
      
        useEffect(() => {
          // Timeline pour le sous-titre + image
          const tl = gsap.timeline();
          tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
          ).fromTo(
            imgRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.5 },
            "-=0.5"
          );
      
          // Timeline pour le texte mot par mot
          const overlayEl = overlayRef.current;
          if (!overlayEl) return;
      
          document.fonts.ready.then(() => {
            const split = new SplitText(overlayEl, {
              type: "words",
              wordsClass: "word",
            });
      
            gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top +=35",
                end: "+=1500 +=1500", // scroll = hauteur du texte + viewport
                scrub: 1,
                pin: true,
                markers: true,
                pinSpacing: false,
              },
            }).fromTo(
              split.words,
              { opacity: 0, y: 0 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                ease: "power1.out",
              }
            );
          });
        }, []);

  return (
    <>
        <div className="Hero">
            <section className="HeroIntro">
                <div className="HeroConteneur">
                    <div className="HeroConteneurFlex">
                        <AnimatedTitle text="WRITE YOUR OWN STORY." />
                        
                        <h6 ref={subtitleRef}>- Minimalist books your big ideas -</h6>
                    </div>
                </div>
            </section>

            <section className="HeroSection">
              <div className="PinSection" ref={sectionRef}>
                <div className="HeroMiddleImg" id="StartGsapText" >
                  <div className="HeroImg" style={{ position: "relative", display: "inline-block" }}>
                      <img ref={imgRef} src="../src/assets/img/carnet_real_nobg_o.png" alt="indisponibilité de trouver l'image" style={{ width: "100%", display: "block" }}></img>
                      <div className="OverlayText" ref={overlayRef}>
                          <span className="CenterNoteHigh">
                          SveltNote is a solution for:
                          </span>
                          <span className="ListNote">
                          <br></br>
                          - TO DO
                          <br></br>
                          - Journaling
                          <br></br>
                          - Notes
                          <br></br>
                          - Croquis
                          <br></br>
                          - Agenda
                          <br></br>
                          - Story
                          <br></br>
                          </span>
                          <span className="CenterNote">
                          We believe in simplicity; a book and a pen are enough for big opportunity.
                          </span>
                      </div>
                  </div>
                </div>
              </div>
              <div className="SpaceGSAP">

              </div>
            </section>

            <section className="HeroEnd">
                <div className="Jkamin">
                  <button className="button" onClick={() => window.open("../../src/Shop/shop.html", "_blank")} >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24.00 24.00" fill="none">
                  <path  fillRule="evenodd" clipRule="evenodd" d="M12 3.66333L20.25 7.7398V17.01L12 21.0865L3.75 17.01V7.7398L12 3.66333ZM5.25 9.41292V16.078L11.25 19.0427V12.3776L5.25 9.41292ZM12.75 12.3776V19.0427L18.75 16.078V9.41292L16.5 10.5247V13.4999L15 14.2499V11.2659L12.75 12.3776ZM17.807 8.20577L15.8527 9.17139C15.8099 9.13606 15.7624 9.10498 15.7106 9.07908L10.1015 6.27454L12 5.33645L17.807 8.20577ZM8.41452 7.1081L14.1871 9.9944L12 11.0751L6.19304 8.20577L8.41452 7.1081Z" fill="white"/>
                  </svg> 
                  <span>View our products</span>
                    
                  </button>

                  <button className="button2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"><path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"/></svg>
                  <span> Contact us /{'>'} </span>
                    
                  </button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Hero
