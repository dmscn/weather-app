import React from 'react'
import {shallow} from 'enzyme';

import HeaderInfo from '../HeaderInfo';

describe('<HeaderInfo />', () => {
  it('renders', () => {
    const wrapper = shallow(<HeaderInfo location="Rio de Janeiro" />);
    expect(wrapper).toMatchSnapshot();
  });
});