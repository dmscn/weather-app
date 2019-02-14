import React from 'react'
import {shallow} from 'enzyme';
import LoadingLogo from '../LoadingLogo';

describe('<LoadingLogo />', () => {
  it('renders', () => {
    const wrapper = shallow(<LoadingLogo />);
    expect(wrapper).toMatchSnapshot();
  })
})