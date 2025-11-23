import { useState } from 'react'
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

import '../styles/BestSellers.css'

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
  
          toggleActions: 'play none none none',
  
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



function BestSellers() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="OBS">
            <h2>Our Best Sellers :</h2>
            <div id="DivCenter">
                <div className="ContainerThreeCase">

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
                    <div className="ContainerCase First">
                        <div className="card">
                            <img src="assets/img/OBS/OBS_lifetracker.png" alt="" />
                            <section>
                                <h2>Life Tracker</h2>
                                <p>An elegant tool to track your goals and daily well-being</p>
                                <div>
                                <div className="tag" aria-label="15 million followers">
                                    <i className="fa-solid fa-user"></i> 15.20 $
                                </div>
                                <button>Add to Cart</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </AnimatedContent>
                
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.02}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.4}
                    >
                    <div className="ContainerCase Second">
                        <div className="card">
                            <img src="assets/img/OBS/OBS_crayon.png" alt="" />
                            <section>
                                <h2>Simple pencil</h2>
                                <p>Simple pencil ×3 </p>
                                <div>
                                <div className="tag" aria-label="15 million followers">
                                    <i className="fa-solid fa-user"></i> 4.99 $
                                </div>
                                <button>Add to Cart</button>
                                </div>
                            </section>
                        </div>
                    </div>
                    </AnimatedContent>
                    <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.01}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.5}
                    >
                    <div className="ContainerCase">
                        <div className="card">
                            <img src="assets/img/OBS/OBS_book.png" alt="" />
                            <section>
                                <h2>Minimalist Notebook</h2>
                                <p>A minimalist journal to capture your ideas, dreams, and inspirations.</p>
                                <div>
                                <div className="tag" aria-label="15 million followers">
                                    <i className="fa-solid fa-user"></i> 7.59 $
                                </div>
                                <button>Add to Cart</button>
                                </div>
                            </section>
                        </div>
                    </div>
                    </AnimatedContent>

                </div>
            </div>
        </div>
    </>
  )
}

export default BestSellers
