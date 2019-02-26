import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const dogList = dogs.map(dog => {
    return (
      <Dog key={dog.name} dog={dog} />
    );
  });
  return (
    <ul>
      {dogList}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
