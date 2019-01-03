import React from 'react';
import ErrorMessage from '../components/main-button-section/alert-message/error-message';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { SHOW_ERROR_ALERT } from '../constans';

configure({ adapter: new Adapter() });

describe('<ErrorMessage />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<ErrorMessage stateHandler={function() {}} showErrorAlert={true} />);
    expect(wrapper.find('.campaigns-settings__custom-alert').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__custom-alert-close').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__custom-alert').text()).toBe('Error. Please fill out all required fields!');
  });
  it('Check for hiding', () => {
    const wrapper = shallow(<ErrorMessage stateHandler={function() {}} showErrorAlert={false} />);
    expect(wrapper.type()).toBe(null);
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<ErrorMessage stateHandler={onClickFunc} showErrorAlert={true} />);
    const button = wrapper.find('.campaigns-settings__custom-alert-close');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([[SHOW_ERROR_ALERT, false]]);
  });
  it('matches the snapshot show', () => {
    const tree = shallow(<ErrorMessage stateHandler={function() {}} showErrorAlert={true} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<ErrorMessage stateHandler={function() {}} showErrorAlert={false} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
