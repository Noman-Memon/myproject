import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <h1>Name is : {name}</h1>
      </div>
    )
  }
}
