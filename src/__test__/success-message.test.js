import React from 'react';
import SuccessMessage from '../components/main-button-section/success-message/success-message';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { SHOW_SUCCESS_ALERT } from '../constans';

configure({ adapter: new Adapter() });

describe('<SuccessMessage />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<SuccessMessage stateHandler={function() {}} showSuccessAlert={true} />);
    expect(wrapper.find('.campaigns-settings__custom-alert').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__custom-alert-close').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__custom-alert').text()).toBe('Success! All changes have been saved.');
  });
  it('Check for hiding', () => {
    const wrapper = shallow(<SuccessMessage stateHandler={function() {}} showSuccessAlert={false} />);
    expect(wrapper.type()).toBe(null);
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<SuccessMessage stateHandler={onClickFunc} showSuccessAlert={true} />);
    const button = wrapper.find('.campaigns-settings__custom-alert-close');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([[SHOW_SUCCESS_ALERT, false]]);
  });
  it('matches the snapshot show', () => {
    const tree = shallow(<SuccessMessage stateHandler={function() {}} showSuccessAlert={true} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<SuccessMessage stateHandler={function() {}} showErrorAlert={false} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
