import React,{Component} from 'react'
import '../styles/main.scss'
class Filters extends Component  {
 
  state = {
    value:100
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
    render(){
      return (
        <div className="filter-container">
            <h3 className="filter-title">Filter by:</h3>
            <hr/>

           <div className="price-filter">
            <p>price category</p>
            <select 
                onChange={e => this.props.handleSelectFilter(e.target.value)}
                name='priceCategory'
              >
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
              </select>
           </div>
           <div className="distance-filter">
             <p>distance to venue</p>
             <input 
              id="distance-range" 
              type="range" 
              min="100" max="5000"  
              onChange={e => {this.props.handleHotelDistance(e.target.value)}}
              step="1"
            />
           </div>
           <div className="amenities-filter">
              <p>room amenities</p>
              <fieldset>
                <div className='feature-item'>
                  <label htmlFor="free wifi">free wifi</label>
                  <input type="checkbox" value="free wifi" name="free wifi" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
                </div>
                <div className='feature-item'>
                  <label htmlFor="spa">spa</label>
                  <input type="checkbox" value="spa" name="spa" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
                </div>
                <div className='feature-item'>
                  <label htmlFor="gym">gym</label>
                  <input type="checkbox" value="gym" name="gym" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
                </div>
                <div className='feature-item'>
                  <label htmlFor="gym">pool</label>
                  <input type="checkbox" value="pool" name="pool" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
                </div>
                <div className='feature-item'>
                  <label htmlFor="gym">free parking</label>
                  <input type="checkbox" value="free_parking" name="free_parking" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
                </div>
                <div className='feature-item'>
                  <label htmlFor="gym">restaurant</label>
                  <input type="checkbox" value="restaurant" name="restaurant" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
                </div>
                <div className='feature-item'>
                <label htmlFor="gym">pets</label>
                <input type="checkbox" value="pets" name="pets" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
              </div>
              </fieldset>
            </div>
        </div>
    )
      }
    
  
}

export default Filters
