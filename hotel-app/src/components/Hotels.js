import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import './hotels.scss'
class Hotels extends Component {
    state = {
        hotels: []
    }
    componentWillMount(){
        axios.get('http://localhost:3000/hotels')
        .then(res => this.setState({
            hotels:res.data
        }));
        
    }
  render() {
    const hotelItems = this.state.hotels.map( hotel =>  (
        <div className="hotel-card" key={hotel.id}>
            <div className='image-container'>
                <img 
                    src={require(`../utilities/${hotel.images[0]}.jpg`)} 
                    alt="{hotel.name}"
                />
            </div>
            <div className='main-information'>
                    <h3 className='hotel-name'>{hotel.name}</h3>
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
    ))
    return (
      <div className='hotels-wrapper'>
        {hotelItems}
      </div>
    )
  }
}

export default Hotels
