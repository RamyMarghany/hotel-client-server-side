import React from 'react'

const Filters = props =>  {
   


    return (
        <>
            <input className='hotel-search-box' type="text" placeholder="search hotels..." label="Search Hotels" onChange={props.handleSearch}/>
            <select 
                   
                    onChange={e => props.handleSelectFilter(e.target.value)}
                    name='priceCategory'
                >
                    <option value='low'>low</option>
                    <option value='medium'>medium</option>
                    <option value='high'>high</option>
            </select>
            <label for="free wifi">free wifi</label>
            <input type="checkbox" value="free wifi" name="free wifi" onChange={e =>{props.handleCheckFilter(e.target)}} />
            <label for="spa">spa</label>
            <input type="checkbox" value="spa" name="spa" onChange={e =>{props.handleCheckFilter(e.target)}} />
            <label for="gym">gym</label>
            <input type="checkbox" value="gym" name="gym" onChange={e =>{props.handleCheckFilter(e.target)}} />
        </>
    )
  
}

export default Filters
