
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import happy from '../assets/happy.jpg';
import sad from '../assets/sad.jpg';
import relaxed from '../assets/relaxed.jpg';
import angry from '../assets/angry.jpg';
import './MoodCarousel.css';

const MoodCarousel = () => {
  const images = [happy, sad, relaxed, angry];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mood-carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="carousel-card" key={index}>
            <img src={img} alt={`mood-${index}`} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoodCarousel;

