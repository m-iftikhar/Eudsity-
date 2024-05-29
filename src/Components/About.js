import React from 'react'
import './About.css'
import about_img from '../Assets/about.png'
import play_icon from '../Assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
     <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon'/>

     </div>
        


     <div className='about-right'>
     <h1>About University</h1>
     <h2>Nurturing Tomoorrow leaders today</h2>
    <p>Our university excels in academic excellence and research innovation. We offer diverse programs that attract global students seeking a dynamic learning environment. State-of-the-art facilities support both education and research.</p>
    <p>Our expert faculty provides top-tier education and mentorship. Emphasizing interdisciplinary studies and practical applications, we prepare graduates for modern workforce challenges. Our curriculum ensures comprehensive and relevant education.</p>
     <p>Beyond academics, vibrant campus life enriches student experiences. Numerous student organizations, cultural events, and support services foster personal growth. Our holistic approach creates a thriving community where students excel academically and personally.</p>
    </div>
    </div>
    
  )
}

export default About