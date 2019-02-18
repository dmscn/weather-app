import React from 'react'
import {shallow} from 'enzyme';

import HeaderInfo from '../HeaderInfo';

describe('<HeaderInfo />', () => {
  const wrapper = shallow(<HeaderInfo location="Rio de Janeiro" />);
  expect(wrapper).toMatchSnapshot();
});