import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 class ImageSlider extends Component {
  render() {
    const images = this.props.images.map(image => {
      console.log('<>|<>|<>|<>|<>',image)
      return(
        <img 
          src={require(`../utilities/${image}.jpg`)} 
          alt="{hotel.name}" key={image}
        />       
      )
      
    })
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    )
  }
}
export default ImageSlider;
