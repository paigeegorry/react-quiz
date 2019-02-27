import React, { PureComponent } from 'react';
import AddDogForm from './AddDogForm';

class App extends PureComponent {
  state = {
    name: '',
    age: 0,
    weight: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, age, weight } = this.state;
    return (
      <>
      <h1>Enter Pet Info!</h1>
      <AddDogForm 
        name={name}
        age={Number.parseInt(age)}
        weight={weight}
        handleChange={this.handleChange}  
      />
      </>
    );
  }
}

export default App;
