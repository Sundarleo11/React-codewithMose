import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 1,
        tag: ['tag1', 'tag2', 'tag3']
    }

    style = {
        fontSize: 10,
        fontWeight: "Bold",

    }
    render() {

        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return <React.Fragment>

            {/* <span>{this.state.count}</span>
               <h1>Helloworld</h1>
               style={this.style} 
            */}
            <span className={classes}>{this.formatecount()}</span>
            <button className='btn btn-secondary  btn-sm'>Increament</button>
            <ul>
                {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>
    }

    formatecount() {
        // const { counter } = this.state;
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default counter;

