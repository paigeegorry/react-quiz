import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({
  fontColor,
  backgroundColor,
  handleChange
}) {
  return (
    <>
    <label>
      Choose a font color:
      <input type="color" name="fontColor" value={fontColor} onChange={handleChange} />
    </label>
    <label>
      Choose a background color: 
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={handleChange} />
    </label>
    </>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
