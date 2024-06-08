import React, { useEffect, useState } from 'react'
import './Hero.css'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.png'
function Hero() {
    const [slideIndex, setSlideIndex] = useState(0);
  
    useEffect(() => {
        window.scrollTo(0,0)
        const intervalId = setInterval(() => {
          showSlide(1);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, []);
      
      const showSlide = (n) => {
        setSlideIndex((prevIndex) => (prevIndex + n) % 3);
      };
      slideIndex < 0 ? setSlideIndex(2) : ''
  return (
    <div className='hero'>
      <div className="Slider">
        <div className="slider">
          <div className="slide fade" style={{ display: slideIndex === 0 ? 'flex' : 'none'}}>
            <img  src={banner1} alt="Slide 1" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 1 ? 'flex' : 'none'}}>
            <img src={banner2} alt="Slide 2" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 2 ? 'flex' : 'none'}}>
            <img src={banner3} alt="Slide 3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
