import React from 'react';
import PropTypes from 'prop-types';

function Shape({
  text,
  fontColor, 
  backgroundColor
}) {

  const divStyle = {
    color: fontColor,
    backgroundColor: backgroundColor,
    width: '200px',
    height: '200px',
    textAlign: 'center' 
  };

  return (
    <div style={divStyle}>
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
