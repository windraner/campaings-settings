import React from 'react';
import ButtonSave from '../components/main-button-section/button-save/button-save';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<ButtonSave />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<ButtonSave handlerCallBack={function() {}} />);
    expect(wrapper.find('.campaigns-settings__save-button').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__save-button').text()).toBe('Save settings');
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<ButtonSave handlerCallBack={onClickFunc} />);
    const button = wrapper.find('.campaigns-settings__save-button');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
  });
  it('matches the snapshot', () => {
    const tree = shallow(<ButtonSave handlerCallBack={function() {}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
