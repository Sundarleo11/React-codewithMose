import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0
    }
    render() {
        return <React.Fragment>
            <h1>Helloworld</h1>
            {/* <span>{this.state.count}</span>*/}
            <span>{this.formatecount()}</span>
            <button>Increament</button>
        </React.Fragment>
    }

    formatecount() {
        // const { counter } = this.state;
        const { count } = this.state;
        return count === 0 ? <h4>zero</h4> : count;
    }
}

export default counter;

