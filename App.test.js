
import React from 'react';
import renderer from 'react-test-renderer';



import Photostack from './client/src/Photostack.jsx';

import Scroll from './client/src/StyledComponents/Photostack_styles.jsx';



test('Scroll changes class when hovered', () => {
  const component = renderer.create(<Scroll>Hello</Scroll>)
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})