import React, { Component, Fragment } from 'react';

const SearchBox = ({ searchField, searchChange }) => {

    return (
        <div className='tc'>
            <input className='pa3 ba b--green bg-ligthest-blue' type='search' placeholder='search robots' onChange={searchChange}></input>
        </div>
    );

}

export default SearchBox;