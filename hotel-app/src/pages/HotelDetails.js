import React, { Component } from 'react'
import HotelCard from '../components/HotelCard'
import axios from 'axios'
import '../styles/main.scss'


  const getHotelByID = (hotelId) => {
    return new Promise((resolve, reject)=>{
      axios.get(`http://localhost:3000/hotels/${hotelId}`)
      .then((response) => {
        resolve(response.data);
      })
        .catch(reject)
      })
    }
    class HotelDetails extends Component {
      state={
          hotel:{}
      }
      componentDidMount(){
        const id = this.props.match.params.id;
        getHotelByID(id)
        .then(res => {
            this.setState(()=>{
            return {hotel: res}
          })
        })
      }
      render() {
        const {hotel} = this.state;
        return (
          <div className="full-hotel-details">
            {hotel.id && <HotelCard hotel={hotel}/>}
          </div>
        )
      }
}

export default HotelDetails