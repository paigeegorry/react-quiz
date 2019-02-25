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
    const { text, fontColor, backgroundColor } = this.state;
    const headerStyle = {
      color: this.state.fontColor
    };
    return (
      <>
        <h1>Hello!</h1>
        <TextSelector text={text} handleChange={this.handleChange} />
        <input type="color" name="fontColor" value={fontColor} onChange={this.handleChange} />
        <div>
          <p style={headerStyle}>
            {text}
          </p>
        </div>
      </>
    )
  }
}

export default App;
