import React from 'react';

const SearchBox = ({ searchChange }) => {

    return (
        <div className='tc'>
            <input aria-label="Search robots" className='pa3 ba b--green bg-ligthest-blue' type='search' placeholder='search robots' onChange={searchChange}></input>
        </div>
    );

}

export default SearchBox;