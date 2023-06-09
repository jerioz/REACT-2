import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {newName:this.props.name} ;
        }
        componentDidMount() {
        setTimeout(() => {
        this.setState({ newName: "Alfonsina" });
        }, 3000);
    }
  render() {
    return (
      <div>
        <p>Hola {this.state.newName} </p>
      </div>
    )
  }
}

export default Greeting