import React from 'react';
import { IRobot } from '../containers/App';

const Card = (card: IRobot) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='id' src={`https://robohash.org/${card.id}?size=200x200`} />
            <div>
                <h2>{card.name}</h2>
                <p>{card.email}</p>
            </div>
        </div>
    );
}

export default Card;