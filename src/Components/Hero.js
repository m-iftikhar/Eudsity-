import React from 'react'
import './Hero.css'
import dark_arrow from '../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We ensure better Education for better world</h1>
            <p>Unlock Your Potential: Explore our education website for curated resources, expert insights, and personalized learning experiences. Elevate your education journey today!</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
        </div>
        

    </div>
  )
}

export default Hero