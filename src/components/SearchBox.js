import React from 'react';

const SearchBox = ({handleChange}) => {
    return(
        <div className="pa2">
        <input 
        type="search" 
        className="pa3 mb3 ba b--green bg-lightest-blue" 
        placeholder="search robots..."
        onChange={handleChange}
        />
        </div>
    )
}

export default SearchBox;