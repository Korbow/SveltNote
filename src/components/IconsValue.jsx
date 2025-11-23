import { useState } from 'react'
import { useRef, useEffect, UseRef } from 'react';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


import '../styles/IconsValue.css'

const AnimatedContent = ({

    children,
  
    distance = 100,
  
    direction = 'vertical',
  
    reverse = false,
  
    duration = 0.8,
  
    ease = 'power3.out',
  
    initialOpacity = 0,
  
    animateOpacity = true,
  
    scale = 1,
  
    threshold = 0.1,
  
    delay = 0,
  
    onComplete
  
  }) => {
  
    const ref = useRef(null);
    
  
  
    useEffect(() => {
  
      const el = ref.current;
  
      if (!el) return;
  
  
      const axis = direction === 'horizontal' ? 'x' : 'y';
  
      const offset = reverse ? -distance : distance;
  
      const startPct = (1 - threshold) * 100;
  
  
      gsap.set(el, {
  
        [axis]: offset,
  
        scale,
  
        opacity: animateOpacity ? initialOpacity : 1
  
      });
  
  
      gsap.to(el, {
  
        [axis]: 0,
  
        scale: 1,
  
        opacity: 1,
  
        duration,
  
        ease,
  
        delay,
  
        onComplete,
  
        scrollTrigger: {
  
          trigger: el,
  
          start: `top ${startPct}%`,
  
          toggleActions: 'play pause resume reset',
  
          once: true
  
        }
  
      });
  
  
      return () => {
  
        ScrollTrigger.getAll().forEach(t => t.kill());
  
        gsap.killTweensOf(el);
  
      };
  
    }, [
  
      distance,
  
      direction,
  
      reverse,
  
      duration,
  
      ease,
  
      initialOpacity,
  
      animateOpacity,
  
      scale,
  
      threshold,
  
      delay,
  
      onComplete
  
    ]);


    return <div ref={ref}>{children}</div>;
  
  };

function IconsValue() {
  const [count, setCount] = useState(0)

  const ContainerImg = useRef()
  const ContainerText = useRef()

    
      useEffect(() => {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ContainerImg.current,
            start: "top center",
            end: "bottom bottom",
            markers: true,
            scrub: 1,
            toggleActions: 'play pause resume reset',
          },
        });

        tl.fromTo(ContainerImg.current, {
          x: () => window.innerWidth / 2 - 400,
          
          ease: "power3.out",

        },
        {
          x: 0,
          duration: 16,
          speed: 30,
        }
        
      )
        tl.fromTo(ContainerText.current, {
          x: -700,
          opacity: 0,
          ease: "power3.out",

        },
        {
          x: 0,
          opacity: 1,
          duration: 16,
          speed: 40,
        }
      )
    });

  return (
    <>
      <div className="Values">
        <div className="TitleValues">
        <h2>Our Values :</h2>
        </div>
        <div className="IconsValue">
            <div className="IconsValueContainer1">
                <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.03}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.15}
                        >
                <div  className="IconsValueUnit">
                    <div className="Box">
                        <img src="../src/assets/img/icons/ICON_reforestation.png"></img>
                    </div>
                    <div className="LabelBoxIcons">
                        <p>Reforestation actor</p>
                    </div>
                </div>
                </AnimatedContent>
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.03}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.2}
                    >
                <div  className="IconsValueUnit">
                    <div className="Box">
                        <img src="../src/assets/img/icons/ICON_qualitepremium.png"></img>
                    </div>
                    <div className="LabelBoxIcons">
                        <p>Premium quality</p>
                    </div>
                </div>
                </AnimatedContent>
            </div>
            <div className="IconsValueContainer2">
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.03}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.25}
                    >
                <div  className="IconsValueUnit">
                    <div className="Box">
                        <img src="../src/assets/img/icons/ICON_recyclable.png"></img>
                    </div>
                    <div className="LabelBoxIcons">
                        <p>Recyclable</p>
                    </div>
                </div>
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.03}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                    >
                    <div  className="IconsValueUnit">
                        <div className="Box">
                            <img src="../src/assets/img/icons/ICON_savoirfaire.png"></img>
                        </div>
                        <div className="LabelBoxIcons">
                            <p>Fnow-how</p>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
        <div className="DescValues">
          <div className="DescValuesContainerImg" ref={ContainerImg}>
            <img src="../src/assets/img/DescValueSco.png"></img>
          </div>
          <div className="DescValuesContainerText" ref={ContainerText}>
            <h2>
            About Svelt Note
            </h2>
            <p className="DescValuesText">
            Svelt Note is where intentional design meets meaningful impact.
            <br></br>
            
            Each product is crafted with precision and care, using premium materials that reflect timeless simplicity and refined function.
            <br></br>
            <br></br>
            Our commitment extends beyond aesthetics — we are active reforestation contributors, ensuring that every creation helps restore what the planet gives us.
            <br></br>
            <br></br>
            Built to last, fully recyclable, and born from a deep respect for craftsmanship, Svelt Note embodies modern know-how guided by purpose.

            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IconsValue
