import React from 'react'
import Navbar from './Components/Navbar'
 import Hero from './Components/Hero'
 import Program from './Components/Program'
import Title from './Components/Title'
import About from './Components/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className='container'>
        <Title subtitle='our program' title='What We Offers'/>
      <Program/>
      <About/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact US' title='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
     
    </div>
  )
}

export default App
