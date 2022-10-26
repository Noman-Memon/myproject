import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }
  // best way is to used Arrow function like this
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    return (
      <div>
        <h3>Count Value is: {this.state.counter}</h3>
        <button
          onClick={() => {
            // best way of binding event handler is to use Arrow function
            this.increment()
          }}
        >
          Click
        </button>
      </div>
    )
  }
}
