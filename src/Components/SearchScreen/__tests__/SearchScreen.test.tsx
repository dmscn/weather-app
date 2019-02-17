import React from 'react'
import { shallow } from "enzyme";
import Button from '@material-ui/core/Button';

import SearchScreen from "../SearchScreen";

describe('<SearchScreen />', () => {
  it('renders', () => {
    const wrapper = shallow(<SearchScreen onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes text', () => {
    const wrapper: any = shallow(<SearchScreen onSubmit={() => {}}/>);
    const spy = jest.spyOn(wrapper.instance(), 'handleOnChange');
    const mEvent = { target: { name: 'Location', value: 'a'}};

    wrapper.find('#LocationInput').simulate('change', mEvent);
    expect(wrapper.state()).toEqual({text: 'a'});
  })

  it('submits when button clicked', () => {
    const mSubmitFunction = jest.fn();
    const wrapper = shallow(<SearchScreen onSubmit={mSubmitFunction}/>);

    wrapper.find(Button).simulate('click');
    expect(mSubmitFunction).toHaveBeenCalledWith('');
  })
});