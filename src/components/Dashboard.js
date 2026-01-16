import React, { Component } from 'react'

export default class Dashboard extends Component {
  
  handleClick(){
    console.log("on click")

  }
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

