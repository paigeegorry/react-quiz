import React, { Component } from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';
import Shape from './Shape';

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
    const { text, fontColor, backgroundColor } = this.state;
    return (
      <>
        <h1>Font Customizer</h1>
        <TextSelector text={text} handleChange={this.handleChange} />
        <ColorSelector fontColor={fontColor} backgroundColor={backgroundColor} handleChange={this.handleChange} />
        <Shape text={text} fontColor={fontColor} backgroundColor={backgroundColor} />
      </>
    );
  }
}

export default App;
