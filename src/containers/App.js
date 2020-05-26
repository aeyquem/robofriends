import { setSearchField, requestRobots } from '../actions'
import { connect } from 'react-redux'
import MainPage from '../components/MainPage'
import React, { Component } from 'react'


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
    render() {
        return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);