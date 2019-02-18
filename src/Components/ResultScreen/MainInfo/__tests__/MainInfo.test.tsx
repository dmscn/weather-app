import React from 'react'
import {shallow} from 'enzyme';

import MainInfo from '../MainInfo';

describe('<MainInfo />', () => {
  it('renders', () => {
    const wrapper = shallow(<MainInfo />);
    expect(wrapper).toMatchSnapshot();
  });
})