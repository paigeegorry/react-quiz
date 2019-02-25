import React, { Component } from 'react';

class App extends Component {
  state = {
    text: '',
    fontColor: '',
    backgroundColor: ''
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <h1>Hello!</h1>
        <label>
          Text: 
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
        </label>
      </>
    )
  }
}

export default App;
