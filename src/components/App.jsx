import { useState } from 'react'

import '../styles/App.css'
import '../styles/Style.css'
import Testimonials from './Testimonials.jsx'
import Hero from './Hero.jsx'
import BestSellers from './BestSellers.jsx'
import Quote from './Quote.jsx'
import IconsValue from './IconsValue.jsx'
import Schema from './Schema.jsx'
import PreFooter from './PreFooter.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Hero />
      <Testimonials />
      <BestSellers />
      <div class="NoOverflow">
      <Quote />
      </div>
      <IconsValue />
      <Schema />  
      <PreFooter /> 
      <Footer /> 
    </>
  )
}

export default App
