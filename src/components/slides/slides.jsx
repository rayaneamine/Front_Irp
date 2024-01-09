import React from "react";
import Slider from "react-slick";
import "./slides.scss";


function Slide(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
    }
    return(
        <>
            <Slider className="slider" {...settings}>
                <img src="/images/Rectangle_41.jpg"/>
                <img src="/images/Rectangle_41.png"/>
                <img src="/images/Rectangle_41.png"/>
                <img src="/images/Rectangle_41.png"/>
                <img src="/images/Rectangle.41png"/>
                
            </Slider>
        </>
    )
}
export default Slide;