import React from 'react'
import {shallow} from 'enzyme';

import OtherInfo from '../OtherInfo';

describe('<OtherInfo />', () => {
  it('renders', () => {
    const wrapper = shallow(<OtherInfo />);
    expect(wrapper).toMatchSnapshot();
  })
});