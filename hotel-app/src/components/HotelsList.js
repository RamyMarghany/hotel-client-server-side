import React, { Component } from 'react';
import HotelItem from './HotelItem';
import Filters from './Filters';
import axios from 'axios';
import '../hotels-list.scss'
class HotelsList extends Component {
    state = {
        hotels: [],
        searchedHotels:[],
        selectedAmenities:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3000/hotels')
        .then(res => this.setState({
            hotels:res.data,
            searchedHotels:res.data
        }));
    }

    handleSearch = e => {
        this.setState({
            searchedHotels:this.state.hotels.filter(hotel => {
                return hotel.name.toString().toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
            })
        })
    }

    handleSelectFilter = (text) =>{
       this.setState({
           searchedHotels: this.state.hotels.filter( hotel => {
                return hotel.price_category === text;
           })
       })
    }

    handleCheckFilter = target => { 
        if(target.checked){
            this.setState(prevState =>({
                selectedAmenities:[...prevState.selectedAmenities, target.value]
            }), () =>{
                console.log(this.state.selectedAmenities);

            })
        }
        else{
            this.setState(prevState=>{
               const amenities =  [...prevState.selectedAmenities]
               amenities.splice(amenities.indexOf(target.value),1)
            return {
                selectedAmenities:amenities
            }}, () =>{
                console.log(this.state.selectedAmenities);
            })
        }
        
    }

    render() {
    const {searchedHotels} = this.state;
    return (
        <div>
            <Filters 
                handleSearch = {this.handleSearch} 
                handleSelectFilter = {this.handleSelectFilter}
                handleCheckFilter = {this.handleCheckFilter}
            />
            <HotelItem searchedHotels={searchedHotels} />
        </div>
    )
  }
}

export default HotelsList
