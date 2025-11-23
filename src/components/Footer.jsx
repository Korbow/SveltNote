
import { useState } from 'react'


import '../styles/Footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="Footer">
            <div className="FooterName">
                <h6>
                    SVELT NOTE
                </h6>
            </div>
            <div className="svgSp">
                <svg height="20" width="700" xmlns="http://www.w3.org/2000/svg">
                    <line id="svgLineSp" x1="0" y1="0" x2="700" y2="0"></line>
                </svg>
            </div>
            <div className="contactFooter">
                <p className="contactText">
                    Contact
                </p>
                <h4>@2025 SveltNote</h4>
                <p className="contactText">
                    Instagram
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer
