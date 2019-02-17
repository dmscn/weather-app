import React from 'react'
import { shallow } from "enzyme";
import Button from '../../UI/Button';

import SearchScreen from "../SearchScreen";

describe('<SearchScreen />', () => {
  it('renders', () => {
    const wrapper = shallow(<SearchScreen onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes text', () => {
    const wrapper: any = shallow(<SearchScreen onSubmit={() => {}}/>);
    const spy = jest.spyOn(wrapper.instance(), 'handleOnChange');

    wrapper.find('#LocationInput').simulate('change', { target: { value: 'a' }});
    expect(wrapper.state()).toEqual({text: 'a'});
 
    wrapper.instance().handleOnChange({ target: { value: 'b'}});
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state()).toEqual({ text: 'b'});
  })

  it('submits when button clicked', () => {
    const mSubmitFunction = jest.fn();
    const wrapper = shallow(<SearchScreen onSubmit={mSubmitFunction}/>);

    wrapper.find(Button).simulate('click');
    expect(mSubmitFunction).toHaveBeenCalledWith('');
  })
});