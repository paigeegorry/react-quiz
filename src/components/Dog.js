import React from 'react';
import PropTypes from 'prop-types';

function Dog({ dog }) {
  return (
    <li key={dog.name}>
      Name: {dog.name}
      Age: {dog.age}
      Weight: {dog.weight}
    </li>
  );
}

Dog.propTypes = {
  dog: PropTypes.object.isRequired
};

export default Dog;

