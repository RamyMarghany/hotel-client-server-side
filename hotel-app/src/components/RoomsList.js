import React, { Component } from 'react'
import axios from 'axios';

const getRoomsByHotelID = (hotelId) => {
    return new Promise((resolve, reject)=>{
        axios.get(`http://localhost:3000/rooms?hotelId=${hotelId}`)
        .then((response) => {
            resolve(response.data)
         })
        .catch(reject)
      })
    }
    
class RoomsList extends Component {
    state={
        rooms:[],
        all: false
    }
    componentDidMount(){
        const {hotelId} = this.props;
        console.log(hotelId) 
        getRoomsByHotelID(hotelId)
        .then(res => {
            this.setState(()=>{
            return {rooms: res.sort((a,b)=>a.price_in_usd-b.price_in_usd)}
          })
        })
    }
    getAllRooms = () =>{
        this.setState({
            all: true
        })
    }
  render() {
      const roomsList = this.state.rooms.map( room => (
          <div className="room-container" key={room.id}>
              <h3 className="room-name">{room.name}</h3>
              <p className="room-description">{room.description}</p>
              <p className="room-price"><span>price: </span>{room.price_in_usd}$</p>
              <p className="room-capacity"><span>max occupancy: </span>{room.max_occupancy}</p>
          </div>
      ))
    return (
      <div className="rooms-list">
        <h3 className="rooms-title">hotel rooms</h3>
        {this.state.all ? roomsList : roomsList.slice(0,2) }
        <button onClick={this.getAllRooms} className="show-all-rooms">Show all rooms</button>
      </div>
    )
  }
}

export default RoomsList
