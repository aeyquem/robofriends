import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

import { setSearchField, requestRobots } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (isPending) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <Fragment>
                    <h1 className="tc f2">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}></SearchBox>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);


const heavyDuty = () => {
    const heavyArray = new Array(7000).fill(':D');
    console.log('Created!');
    return function (index) {
        return heavyArray[index];
    }
}

heavyDuty()(3);