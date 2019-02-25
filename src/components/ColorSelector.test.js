import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';

describe('ColorSelector', () => {
  const fontColor = 'blue';
  const backgroundColor = 'yellow';
  const handleChange = jest.fn();

  it('matches a snapshot', () => {
    const tree = renderer.create(
      <ColorSelector
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        handleChange={handleChange} 
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
