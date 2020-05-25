import React, { Component } from 'react';

class Scroll extends Component {

    render() {
        return (
            <div style={{ overflowY: 'scroll', height: 'calc(1vh - 300px);' }}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;