import React, { Component } from 'react'

class Filters extends Component {
   
    state = {
        priceCategory:''
    }

    handleSelectState = e => {
        let index = e.nativeEvent.target.selectedIndex;
        let text = e.nativeEvent.target[index].text
        this.setState({
            priceCategory:text,
        })
        this.props.handleSelectFilter(text)
    }
    


  render() {
    return (
        <>
            <input className='hotel-search-box' type="text" placeholder="search hotels..." label="Search Hotels" onChange={this.props.handleSearch}/>
            <select 
                    value={this.state.priceCategory}
                    onChange={this.handleSelectState}
                    name='priceCategory'
                >
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
            </select>
            <label for="wifi">wifi</label>
            <input type="checkbox" value="wifi" name="wifi" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
            <label for="spa">spa</label>
            <input type="checkbox" value="spa" name="spa" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
            <label for="gym">gym</label>
            <input type="checkbox" value="gym" name="gym" onChange={e =>{this.props.handleCheckFilter(e.target)}} />
        </>
    )
  }
}

export default Filters
