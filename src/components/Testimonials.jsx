import { useState } from 'react'

import '../styles/Testimonials.css'

function Testimonials() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="Testimonial">
            <div className="ContainerTestimonials">
                <h2>Customers reviews:</h2>
                <div className="CenterCarousel">
                    <div className="carousel">
                        <div className="line">
                            <div className="track">
                                <span className="testimonial">"Très pratique et élégant" — Louis</span>
                                <span className="testimonial">"J’aime l’élégance simple" — Lucas</span>
                                <span className="testimonial">"Un carnet parfait pour mes idées" — Marie</span>
                                <span className="testimonial">"Exemplaire" — Strango</span>
                                <span className="testimonial">"En soi c’est pas mal" — Jacques Amine</span>
                                <span className="testimonial">"Produit bien, cheap et sec" — Jade</span>
                                <span className="testimonial">"Satisfait du produit" — Arthur E</span>
                                <span className="testimonial">" 10/10" — L'Humayne Fc</span>
                                <span className="testimonial">" Je recommande !" — Pierre N</span>
                                
                                <span className="testimonial">"Très pratique et élégant" — Louis</span>
                                <span className="testimonial">"J’aime l’élégance simple" — Lucas</span>
                                <span className="testimonial">"Un carnet parfait pour mes idées" — Marie</span>
                                <span className="testimonial">"Exemplaire" — Strango</span>
                                <span className="testimonial">"En soi c’est pas mal" — Jacques Amine</span>
                                <span className="testimonial">"Produit bien, cheap et sec" — Jade</span>
                                <span className="testimonial">"Satisfait du produit" — Arthur E</span>
                                <span className="testimonial">" 10/10" — L'Humayne Fc</span>
                                <span className="testimonial">" Je recommande !" — Pierre N</span>
                            </div>
                        </div>

                        <div className="line reverse">
                            <div className="track">
                                <span className="testimonial">"Minimal, clair, parfait" — Sarah</span>
                                <span className="testimonial">"Super agréable à utiliser" — Tom</span>
                                <span className="testimonial">"Un vrai plaisir au quotidien" — Amine</span>
                                <span className="testimonial">"Top qualité" — Léo</span>
                                <span className="testimonial">"Simple et efficace" — Inès</span>
                                <span className="testimonial">"Je recommande !" — Hugo</span>
                                <span className="testimonial">"Quali de fou" — Pierre P</span>
                                <span className="testimonial">" 10/10, recommande a venir" — Axel</span>
                                <span className="testimonial">"Simple et complet" — Imrane</span>

                                
                                <span className="testimonial">"Minimal, clair, parfait" — Sarah</span>
                                <span className="testimonial">"Super agréable à utiliser" — Tom</span>
                                <span className="testimonial">"Un vrai plaisir au quotidien" — Amine</span>
                                <span className="testimonial">"Top qualité" — Léo</span>
                                <span className="testimonial">"Simple et efficace" — Inès</span>
                                <span className="testimonial">"Je recommande !" — Hugo</span>
                                <span className="testimonial">"Quali de fou" — Pierre P</span>
                                <span className="testimonial">" 10/10, recommande a venir" — Axel</span>
                                <span className="testimonial">"Simple et complet" — Imrane</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials
