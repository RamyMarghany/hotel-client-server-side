import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/main.scss'

 class ImageSlider extends Component {
  render() {
    const images = this.props.images.map(image => {
      return(
        <img 
          src={require(`../assets/hotels/${image}.jpg`)} 
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
