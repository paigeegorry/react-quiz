import React from 'react';
import renderer from 'react-test-renderer';
import Shape from './Shape';

describe('Shape', () => {
  it('matches a snapshot', () => {
    const text = 'testText';
    const fontColor = 'blue';
    const backgroundColor = 'yellow';
    
    const tree = renderer.create(
      <Shape 
        text={text}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
