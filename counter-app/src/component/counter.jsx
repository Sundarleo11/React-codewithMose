import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0
    }

    style = {
        fontSize: 10,
        fontWeight: "Bold",

    }
    // to over come need use lamda
    /* constructor() {
         super()
         this.handleincrement = this.handleincrement.bind(this)
     }*/

    handleincrement = () => {
        // console.log("click event", this);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return <React.Fragment>

            {/* <span>{this.state.count}</span>
               <h1>Helloworld</h1>
            */}
            <span className='badge badge-primary m-2'>{this.formatecount()}</span>
            <button onClick={this.handleincrement} className='btn btn-secondary  btn-sm'>Increament</button>
        </React.Fragment>
    }

    formatecount() {
        // const { counter } = this.state;
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default counter;

