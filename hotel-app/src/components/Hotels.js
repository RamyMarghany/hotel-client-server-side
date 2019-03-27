import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './hotels.css'
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
        <img src={require(`../utilities/${hotel.images[0]}.jpg`)} alt="{hotel.name}"/>
            <h2>{hotel.name}</h2>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={hotel.rating}
            />
            <p>{hotel.price_category}</p>
            <p>{hotel.distance_to_venue}</p>
            <p>{hotel.amenities.join(' ')}</p>
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
