import React from 'react';
import renderer from 'react-test-renderer';
import TextSelector from './TextSelector';

describe('TextSelector', () => {
  const text = 'testText';
  const handleChange = jest.fn();

  it('matches a snapshot', () => {
    const tree = renderer.create(
      <TextSelector 
        text={text}
        handleChange={handleChange}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
