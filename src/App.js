import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            }).then(users => {
                this.setState({ robots: users });
            });
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
                <h1 className="tc f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}></SearchBox>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </Fragment>
        );
    }
}

export default App;