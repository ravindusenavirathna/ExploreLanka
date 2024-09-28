import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
.slick-slide img {
    width: 100%;
    height: auto; /* Set a fixed height for the images */
    max-height: 400px; /* Set a max height for clearer images */
    object-fit: cover; /* Ensures the image covers the container without distortion */
}

.slick-dots li button:before {
    color: white; /* Style dots */
}
`;

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,            // Enable auto-sliding
autoplaySpeed: 3000,       // Slide every 3 seconds
pauseOnHover: true,        // Pause slideshow when hovering over the image
};

const images = [
'/image-18.png',  // Adjusted the path to be correct
'/IMG_9810.jpg',
'/sri-lanka-travel-and-tourism.jpg',
];

const Slideshow = () => {
return (
    <SliderWrapper>
    <Slider {...settings}>
        {images.map((image, index) => (
        <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
        </div>
        ))}
    </Slider>
    </SliderWrapper>
);
};

export default Slideshow;
