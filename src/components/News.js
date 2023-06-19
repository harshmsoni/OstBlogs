import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import download from "./downloadd.jpeg";
import sustain from '../../src/components/segments/images/sustain.webp'
import mental from '../../src/components/segments/images/mental1.webp'
import travel from '../../src/components/segments/images/travel.webp'

const Carousel = () => {
  const slidesData = [
    {
      image: sustain,
      title: 'Mushroom Coffin',
      description: 'Sustainable till death do us part, and 45 days beyond; mushroom coffin a last best wish for some'
    },
    {
      image: mental,
      title: 'Mental Health',
      description: 'World mental health support and the effect of stigma and discrimination'
    },
    {
      image: travel,
      title: 'LGBTQ+Travellers',
      description: 'Trips to or through hostile areas feel increasingly risky for many people in this community, given the rise of hateful anti-LGBTQ+ policies'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    const truncated = description.substring(0, maxLength).split(' ').slice(0, -1).join(' ');
    return `${truncated}...`;
  };

  return (
    <div style={{ position: 'absolute', width: '284px', height: '350px', left: '1180px', top: '300px', border: '1px solid black', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', height: '100%', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.3s ease' }}>
        {slidesData.map((slide, index) => (
          <div key={index} style={{ flex: '0 0 100%', width: '100%', padding: '10px' }}>
            <img src={slide.image} alt="Slide" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', paddingBottom: '20px', borderRadius:'10px' }} /><br/>
            <h2 style={{ marginTop: '10px', paddingLeft: '20px', fontSize:'25px' }}>{slide.title}</h2>
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '150px' }}>{truncateDescription(slide.description, 150)}<a href='https://indianexpress.com/article/lifestyle/life-style/mushroom-coffin-sustainable-living-last-wish-8626647/'>Read More...</a></p>
            
          </div>
        ))}
      </div>
      <button style={{ position: 'absolute', top: '50%', left: '0px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={handlePrevSlide}>
        <FaChevronLeft size={24} />
      </button>
      <button style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={handleNextSlide}>
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
