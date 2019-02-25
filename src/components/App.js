import React, { Component } from 'react';
import TextSelector from './TextSelector';
import ColorSelector from './ColorSelector';

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
    const textStyle = {
      color: fontColor,
      backgroundColor: backgroundColor
    };
    return (
      <>
        <h1>Hello!</h1>
        <TextSelector text={text} handleChange={this.handleChange} />
        <ColorSelector fontColor={fontColor} backgroundColor={backgroundColor} handleChange={this.handleChange} />
        <div style={textStyle}>
          <p>
            {text}
          </p>
        </div>
      </>
    )
  }
}

export default App;
