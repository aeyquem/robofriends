import { setSearchField, requestRobots } from '../actions'
import { connect } from 'react-redux'
import MainPage from '../components/MainPage'
import React, { Component } from 'react'


const mapStateToProps = (state: any) => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {
}

interface IAppState {
    robots: Array<IRobot>;
    searchfield: string;
}

class App extends React.Component<IAppProps, IAppState> {
    render() {
        return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);