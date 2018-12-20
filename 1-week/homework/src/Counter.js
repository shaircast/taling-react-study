import React, { Component } from 'react'

class Counter extends Component{

    render(){
        return(
            <div>
                <p>{(this.props.counter === 1) ? this.props.count1 : this.props.count2}</p>
                <button onClick={() => {this.props.add(this.props.counter, this.props.amount)}}> +{this.props.amount} </button>
                <button onClick={() => {this.props.sub(this.props.counter, this.props.amount)}}> -{this.props.amount} </button>
                <button onClick={() => {this.props.reset(this.props.counter)}}> Reset </button>
            </div>
        );
    }
}

export default Counter;