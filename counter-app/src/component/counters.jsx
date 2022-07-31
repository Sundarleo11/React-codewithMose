import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },

        ]
    }


    render() {
        return (
            <React.Fragment >

                {/*   <div>{this.state.counters.map(counter => <Counter key={counter.id} />)}</div>*/}
                <div >
                    {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected />)}
                </div>

            </React.Fragment>

        );
    }
}

export default counters;