import { useState, useEffect} from 'react'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
import '../styles/Quote.css'

function Quote() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    // Créer une timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#TriggerQuote",
        start: "top center",
        end: "+=1100",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    // Animation GSAP : split + reveal texte
    tl.to("#linetop", { y: -120, duration: 0.5 }, 0);
    tl.to("#quote-text", { opacity: 0,  fontSize: "110px", duration: 0.1,}, 0);
    tl.to("#linebottom", { y: 120, duration: 0.5 }, 0);

    

    tl.fromTo("#quote-text", 
      {opacity: 0, filter: "blur(10px) drop-shadow(-16px -16px 2px black)"},
      { opacity: 1, filter: "blur(0px) drop-shadow(10px 10px 30px rgb(122 121 121))", x:"0", duration: 4.2 }, 0.1);

    tl.to(".Appear_Book", {
      x: 360,        // part à droite
      rotate: 50, 
      scale: 1.4,
      opacity: 1,
      duration: 1.8,
      ease: "power3.out",
    }, 4);         // → arrive juste après le reveal du texte
  
    tl.to(".Appear_Pen", {
      y: "360%",        // part à droite
      x: -860,   
      scale: 1.4,
      rotate: 360, 
      opacity: 1,
      duration: 3.3,
      ease: "power3.out",
    }, 2.25);
  
    tl.to(".Appear_Paper", {
      y: "-30%",        // part à droite
      x: -1000,   
      scale: 1.4,
      rotate: 0, 
      opacity: 1,
      duration: 3.3,
      ease: "power3.out",
    }, 0.3);
    
    // ✅ Cleanup : détruire les ScrollTriggers à la fin
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);


  return (
    <> 

          <img className="Appear_Book" src="assets/img/Quote/sketchbook.png" />

          <img className="Appear_Pen" src="assets/img/Quote/OBS_crayon.png" />

          <img className="Appear_Paper" src="assets/img/Quote/Sticker_de_suivi.png" />


      <div>
        

        <div className="Quote" id="TriggerQuote">
            <div className="svgSpQuote" id="linetop">
                <svg height="4" width="700" xmlns="http://www.w3.org/2000/svg">
                    <line id="svgLineSpQuote" x1="0" y1="0" x2="700" y2="0" strokeWidth="8" />
                </svg>
            </div>
            
            <div className='centerQuote'>
              <div className="lineQuote">
                <h3 id="quote-text">“Start writing, no matter what.” - Louis L’Amour </h3>
                {/*
                <div className="imgQuote">
                  <img src="../src/assets/img/featherSVG.svg"></img>
                </div>
                */}
                
              </div>
            </div>
            
            <div className="svgSpQuote" id="linebottom">
                <svg height="4" width="700" xmlns="http://www.w3.org/2000/svg">
                    <line id="svgLineSpQuote" x1="0" y1="0" x2="700" y2="0"  />
                </svg>
            </div>
        </div>
      </div>
    </>
  )
}

export default Quote
