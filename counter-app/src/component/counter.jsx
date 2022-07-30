import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 1,
        tag: []
    }

    style = {
        fontSize: 10,
        fontWeight: "Bold",

    }

    renderTag() {
        if (this.state.tag.length === 0) return <p>There are No Tags</p>;

        return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    render() {

        /*  let classes = "badge m-2 badge-";
          classes += this.state.count === 0 ? "warning" : "primary";*/

        return <div>{this.renderTag()}</div>

        /* return <React.Fragment>
 
 
             <span>{this.state.count}</span>
                <h1>Helloworld</h1>
                style={this.style} 
             
              <span className={classes}>{this.formatecount()}</span>
             <button className='btn btn-secondary  btn-sm'>Increament</button>
            
         </React.Fragment>*/
    }

    /* formatecount() {
         // const { counter } = this.state;
         const { count } = this.state;
         return count === 0 ? "Zero" : count;
     }*/
}

export default counter;

