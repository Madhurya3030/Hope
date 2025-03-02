import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const images = [
  "1.jpg",
  "2.jpg",
  "3.png",
];

const Carousel = () => {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show only one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Change slide every 3 seconds
    arrows: true, // Show left and right arrows
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
