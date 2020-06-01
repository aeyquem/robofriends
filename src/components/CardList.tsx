import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: { robots: IRobot[] }) => {

    let cards = robots.map(robot => {
        return <Card
            id={robot.id}
            key={robot.id}
            name={robot.name}
            email={robot.email}
        />
    })


    return (
        <div>
            {cards}
        </div>
    );
}

export default CardList