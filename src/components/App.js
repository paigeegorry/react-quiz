import React, { Component } from 'react';
import TextSelector from './TextSelector';

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
        <TextSelector text={this.state.text} handleChange={this.handleChange} />
        <div>
          {this.state.text}
        </div>
      </>
    )
  }
}

export default App;
