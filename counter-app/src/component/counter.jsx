import React, { Component } from 'react';

class counter extends Component {
    state = {
        // count: 0
        count: this.props.value
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
        // console.log(e);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        console.log("props", this.props);
        return <div>


            {/* <span>{this.state.count}</span>
               <h1>Helloworld</h1>
            */}
            <span className={classes}>{this.formatecount()}</span>
            <button onClick={() => this.handleincrement()} className='btn btn-secondary  btn-sm'>Increament</button>
        </div>
    }

    formatecount() {
        // const { counter } = this.state;
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default counter;

