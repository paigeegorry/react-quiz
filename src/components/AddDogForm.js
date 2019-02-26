import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dogs from './Dogs';

class AddDogForm extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    dogs: []
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, weight } = this.props;
    this.setState(state => ({
      dogs: [...state.dogs, { name, age, weight }]
    }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange} />
          </label>
          <label>Age:
            <input type="text" name="age" value={this.props.age} onChange={this.props.handleChange} />
          </label>
          <label>Weight:
            <input type="text" name="weight" value={this.props.weight} onChange={this.props.handleChange} />
          </label>
          <button>Submit!</button>
        </form>

        <Dogs 
          dogs={this.state.dogs}
        />
      </>
    );
  }
}

AddDogForm.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AddDogForm;
