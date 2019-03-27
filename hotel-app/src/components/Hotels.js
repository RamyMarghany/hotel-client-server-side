import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './hotels.scss'
class Hotels extends Component {
    state = {
        hotels: []
    }
    componentWillMount(){
        fetch('http://localhost:3000/hotels')
        .then(res =>res.json())
        .then(data => this.setState({
            hotels:data
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
                    <p className="hotel-amenities"><span>amenities:</span>{hotel.amenities.join(' ')}</p>
                </div>
                <div className='secondly-information'>
                    <p>{hotel.distance_to_venue}</p>
                    <p>{hotel.price_category}</p>
                    <button>view hotel</button>
                </div>    
        </div>
    ))
    return (
      <div>
        {hotelItems}
      </div>
    )
  }
}

export default Hotels
