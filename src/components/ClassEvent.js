import React, { Component } from 'react'

export default class classEvent extends Component {
  handleClick = () => {
    console.log('ClassBase Button Clicked')
  }
  render() {
    return (
      <div>
        classBase Event handling
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}
