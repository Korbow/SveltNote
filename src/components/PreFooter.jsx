
import { useState } from 'react'


import '../styles/PreFooter.css'

function PreFooter() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="PreFooter">
            <div className="FlexPreFooter">
                <div className="PreFooterCadreA">
                  <img id="Cadre1img" src="..\src\assets\img\OBS\OBS_book.png"></img>
                </div>
                <div className="Ticket">
                  <h5 id="h5line">
                    Order now with free delivery :
                    
                  </h5>
                  
                  <a id="pline" href="./src/Shop/shop.html" class="btn-shine">
                    [ Click here to see all our products ]
                  </a>

                </div>
                <div className="PreFooterCadreB">
                <img id="Cadre1img" src="..\src\assets\img\Product/Calendrier_avant_la_mort.png"></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default PreFooter
