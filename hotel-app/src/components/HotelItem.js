import React from 'react'
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const HotelItem = ({searchedHotels}) =>{
    const searchedHotelsList = searchedHotels.map(hotel => {
    return(
       <div className="hotel-item" key={hotel.id}>
            <div className='image-container'>
                <img 
                    src={require(`../utilities/${hotel.images[0]}.jpg`)} 
                    alt="{hotel.name}"
                />
            </div>
            <div className='main-information'>
                <Link to={'/hotels/'+hotel.id}>
                    <h3 className='hotel-name'>{hotel.name}</h3>
                </Link>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={hotel.rating}
                />
                <p className="hotel-amenities"><span>amenities:</span>{hotel.amenities.join(' - ')}</p>
            </div>
            <div className='secondly-information'>
            <p className="hotel-distance">
                <span className='distance'>distance to venue</span>
                {hotel.distance_to_venue}
                <span className="meter"> meters</span>
            </p>
            <p className="price"><span className="price-category">price category</span>{hotel.price_category}</p>
            <button className="view-hotel">view hotel</button>
        </div>    
        </div>
    )});

  return (
     <div className="hotel-list">
        {searchedHotelsList}
     </div>
  )
}

export default HotelItem