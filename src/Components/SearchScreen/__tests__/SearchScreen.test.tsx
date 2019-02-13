import React from 'react'
import { shallow } from "enzyme";
import SearchScreen from "../SearchScreen";

describe('<SearchScreen />', () => {
  it('renders', () => {
    const wrapper = shallow(<SearchScreen />);
    expect(wrapper).toMatchSnapshot();
  })
});