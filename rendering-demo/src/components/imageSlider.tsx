'use client'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
    const settings = {
        dots: true,
    };
    return (
        <div>
            <div className="image-slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default ImageSlider
