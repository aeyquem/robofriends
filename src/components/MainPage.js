import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import '../containers/App.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary'
import CounterButon from './CounterButton'
import { IRobot } from '../containers/App';


class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        if (isPending) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <Fragment>
                    <h1 className="tc f2">RoboFriends</h1>
                    <CounterButon />
                    <SearchBox searchChange={onSearchChange}></SearchBox>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundary>
                    </Scroll>
                </Fragment>
            );
        }
    }
}

export default MainPage;