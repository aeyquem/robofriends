import React from 'react';

interface IProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: IProps) => {

    return (
        <div className='tc'>
            <input
                aria-label="Search robots"
                className='pa3 ba b--green bg-ligthest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );

}

export default SearchBox;