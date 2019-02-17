import React from 'react'
import { shallow } from 'enzyme';

import Button from '../Button';


describe('<Button />', () => {
  it('renders', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});