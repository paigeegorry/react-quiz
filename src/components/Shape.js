import React from 'react';
import PropTypes from 'prop-types';

function Shape({
  text,
  fontColor, 
  backgroundColor
}) {
  return (
    <div style={{ color: fontColor, backgroundColor: backgroundColor }}>
      {text}
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
