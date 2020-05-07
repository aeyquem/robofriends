import React, { Component, Fragment } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        console.log(this.props.store);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            }).then(users => {
                this.setState({ robots: users });
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <Fragment>
                    <h1 className="tc f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </Fragment>
            );
        }
    }
}

export default App;