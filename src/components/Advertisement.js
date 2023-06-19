import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import sustain from './segments/images/sustainable.webp'
import badshah from './segments/images/badshah.jpeg'
import adventure from './segments/images/adven.jpeg'


const Carousell = () => {
    const slidesData = [
      { image: sustain },
      { image: badshah },
      { image: adventure }
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slidesData.length);
      }, 2000);
      return () => clearInterval(interval);
    }, [currentSlide, slidesData.length]);
  
    const handleNextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slidesData.length);
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
    };
  
    return (
      <div style={{ position: 'absolute', left: '1180px', top: '677px' }}>
        <div style={{ position: 'relative', width: '284px', height: '264px', border: '1px solid black', borderRadius: '30px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', height: '100%', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.3s ease' }}>
            {slidesData.map((slide, index) => (
              <div key={index} style={{ flex: '0 0 100%', width: '100%', padding: '10px' }}>
                <img src={slide.image} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
          <button style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={handlePrevSlide}>
            <FaChevronLeft size={24} />
          </button>
          <button style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={handleNextSlide}>
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };
  
  export default Carousell;