import React, { Fragment } from 'react'
import { Component } from 'react';

class CounterButon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count === this.state.count) {
            return false;
        }
        return true;
    }

    updateCount = (event) => {
        this.setState(state => {
            return {
                count: this.state.count + 1
            }
        });
    }

    render() {
        return (
            <div className="tc">
                <button onClick={this.updateCount}>Count: {this.state.count}</button>
            </div>
        )
    }

}

export default CounterButon;