import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({
  text,
  handleChange
}) {
  return (
    <label>
          Text: 
      <input type="text" name="text" value={text} onChange={handleChange}></input>
    </label>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
