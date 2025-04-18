import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./ImageSlider.scss";

const NextArrow = ({ onClick }) => (
  <button
    className="image-slider__arrow image-slider__arrow--next"
    onClick={onClick}
    aria-label="Next slide"
  >
    &#9654;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="image-slider__arrow image-slider__arrow--prev"
    onClick={onClick}
    aria-label="Previous slide"
  >
    &#9664;
  </button>
);

function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="image-slider__dots">
        <ul className="image-slider__dots-list">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button type="button" className="image-slider__dot">
        <img
          src={images[i]}
          alt={`Изображение ${i}`}
          className="image-slider__dot-img"
        />
      </button>
    ),
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slider__slide">
            <img
              src={image}
              alt={`Слайд ${index}`}
              className="image-slider__img"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
