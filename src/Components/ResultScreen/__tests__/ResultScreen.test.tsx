import React from 'react'
import { shallow } from "enzyme";
import ResultScreen from "../ResultScreen";

describe('<ResultScreen />', () => {
  it('renders', () => {
    const wrapper = shallow(<ResultScreen />);
    expect(wrapper).toMatchSnapshot();
  })
});