import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import RoomsList from './RoomsList'
import ImageSlider from './ImageSlider'
import '../styles/main.scss'


const HotelCard =({hotel}) =>{
  return (
    <div className="hotel-details">
      <div className="hotel-card">
        <div className="basic-info">
        <h2 className="hotel-name">{hotel.name}</h2>
          <StarRatingComponent 
              name="rate" 
              starCount={5}
              value={hotel.rating}
          />
        </div>
        <div className="additional-info">
        <p className="price">{hotel.price_category}<span className="price-category"> price category</span></p>
        <p className="hotel-distance">{hotel.distance_to_venue}<span className='distance'> distance to venue</span></p>
        
        </div>
        <p className="hotel-amenities"><span>amenities: </span> {hotel.amenities.join(' - ')}</p>
        <ImageSlider images={hotel.images}/>
        <p className="hotel-description">{hotel.description}</p>
      </div>
      <RoomsList hotelId={hotel.id} />
    </div>
  )
}

export default HotelCard