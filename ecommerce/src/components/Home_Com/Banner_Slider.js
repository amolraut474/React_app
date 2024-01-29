
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Banner_Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1,
    };

    return (
        <>
        <Slider {...settings}>
            <div class="slider-bg slide-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="banner_content2">
                                <h5 class="banner-heading">Taking your Viewing Experience to Next Level</h5>
                                <h2 class="banner-sub-heading">Living Room Collection</h2>
                                <a class="banner-btn">Shop Now</a>
                            </div>
                        </div>
                        <div class="col-lg-6">

                        </div>
                    </div>
                </div>

            </div>
            <div class="slider-bg slide-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="banner_content2">
                                <h5 class="banner-heading">Taking your Viewing Experience to Next Level</h5>
                                <h2 class="banner-sub-heading">Living Room Collection</h2>
                                <a class="banner-btn">Shop Now</a>
                            </div>
                        </div>
                        <div class="col-lg-6">

                        </div>
                    </div>
                </div>

            </div>
            <div class="slider-bg slide-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="banner_content2">
                                <h5 class="banner-heading">Taking your Viewing Experience to Next Level</h5>
                                <h2 class="banner-sub-heading">Living Room Collection</h2>
                                <a class="banner-btn">Shop Now</a>
                            </div>
                        </div>
                        <div class="col-lg-6">

                        </div>
                    </div>
                </div>

            </div>

        </Slider>
 
        
        </>
        
        
    );
   
   
};

export default Banner_Slider;
