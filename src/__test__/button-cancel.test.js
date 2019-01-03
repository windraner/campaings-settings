import React from 'react';
import ButtonCancel from '../components/main-button-section/button-cancel/button-cancel';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<ButtonCancel />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<ButtonCancel handlerCallBack={function() {}} />);
    expect(wrapper.find('.campaigns-settings__cancel-button').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__cancel-button').text()).toBe('Cancel');
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<ButtonCancel handlerCallBack={onClickFunc} />);
    const button = wrapper.find('.campaigns-settings__cancel-button');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
  });
  it('matches the snapshot', () => {
    const tree = shallow(<ButtonCancel handlerCallBack={function() {}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
