import React from 'react'
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import '../styles/main.scss'

const HotelItem = ({searchedHotels}) =>{
    const searchedHotelsList = searchedHotels.length ? (
          searchedHotels.map(hotel => {
            return(
               <div className="hotel-item" key={hotel.id}>
                    <div className='image-container'>
                        <img 
                            src={require(`../assets/hotels/${hotel.images[0]}.jpg`)} 
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
                    <p className="hotel-distance">
                        {hotel.distance_to_venue}
                        <span className='distance'> distance to venue</span>
                    </p>
                        <p className="hotel-amenities"><span>amenities:</span>{hotel.amenities.join(' - ')}</p>
                    </div>
                    <div className='secondly-information'>
                    <p className="price">{hotel.price_category} <span className="price-category">price category</span></p>
                    <Link to={'/hotels/'+hotel.id} className="view-hotel">view hotel</Link>
                </div>    
                </div>
            )})
    )
    :(
       <div className="not-found-hotel">
           <img 
                src={require(`../assets/notfound.jpg`)} 
                alt="not found hotels"
            />
            <p>no hotels matched with your filter search...!</p>
       </div>
    )
  

  return (
     <div className="hotel-list">
        {searchedHotelsList}
     </div>
  )
}

export default HotelItem