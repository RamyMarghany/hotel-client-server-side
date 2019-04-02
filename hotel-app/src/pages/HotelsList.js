import React, { Component } from 'react'
import HotelItem from '../components/HotelItem'
import Filters from '../components/Filters'
import axios from 'axios'
import '../styles/main.scss'


const FILTERS  = {
    amenities:(hotel,selectedAmenities) =>  selectedAmenities.every(amenity =>{
        return hotel.amenities.indexOf(amenity) > -1 || selectedAmenities.length === 0
    }),
    price_category:(hotel, priceCatgory) => hotel.price_category.toLowerCase() === priceCatgory.toLowerCase() || !priceCatgory,
    distance_to_venue: (hotel, distance_to_venue)=> parseInt(hotel.distance_to_venue) <= parseInt(distance_to_venue) || !distance_to_venue,
}
class HotelsList extends Component {
    state = {
        hotels: [],
        searchedHotels:[],
        filters:{
            selectedAmenities:[],
            price_category:'',
            distance_to_venue:'',
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/hotels')
        .then(res => this.setState({
            hotels:res.data,
            searchedHotels:res.data
        }));
    }

    commitHotelFilters = () =>{
        const {filters:
            {
                selectedAmenities,
                price_category,
                distance_to_venue
            }} = this.state
             const filteredHotels = this.state.hotels.filter( hotel => {
            return FILTERS.amenities(hotel, selectedAmenities) && FILTERS.price_category(hotel, price_category) && FILTERS.distance_to_venue(hotel,distance_to_venue)
        })
        this.setState({searchedHotels : filteredHotels})
    }


    selectCategory = (text) =>{
       this.setState(prevState=>({filters:{
            ...prevState.filters,
            price_category: text
       }}),this.commitHotelFilters)
    }

    handleCheckFilter = target => { 
        this.setState(prevState =>{
            let amenities =  [...prevState.filters.selectedAmenities]
            if(!target.checked){
                amenities.splice(amenities.indexOf(target.value),1)
            }else{
                amenities = [...prevState.filters.selectedAmenities, target.value]
            }
            return {
                ...prevState,
                filters:{
                    ...prevState.filters,
                    selectedAmenities:amenities
                }
            }
        }, () =>{
            this.commitHotelFilters()
        })
    }

    handleHotelDistance = (text) => {
        this.setState(prevState=>({filters:{
            ...prevState.filters,
            distance_to_venue: text
       }}),this.commitHotelFilters)
    }
    render() {
    const {searchedHotels} = this.state;
    return (
        <div className="landing-page">
            <Filters 
                handleSelectFilter = {this.selectCategory}
                handleCheckFilter = {this.handleCheckFilter}
                handleHotelDistance={this.handleHotelDistance}
            />
            <HotelItem searchedHotels={searchedHotels} />
        </div>
    )
  }
}

export default HotelsList
