import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import CounterButon from '../components/CounterButton'


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