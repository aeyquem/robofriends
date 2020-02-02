import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <Fragment>
                <h1 className="tc">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}></SearchBox>
                <CardList robots={filteredRobots} />
            </Fragment>
        );
    }
}

export default App;