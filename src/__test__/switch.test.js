import React from 'react';
import Switch from '../components/main-content-section/tab-block/common/switch/switch';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Switch />', () => {
  it('Check text prop', () => {
    const wrapper = shallow(<Switch text="test1" field="test2" isChecked={true} switchHandler={function() {}} />);
    expect(wrapper.find('.campaigns-settings__input-title').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__input-title').text()).toBe('test1');
    wrapper.setProps({ text: '' });
    expect(wrapper.find('.campaigns-settings__input-title').length).toBe(0);
  });
  it('Check label', () => {
    const wrapper = shallow(<Switch text="test1" field="test2" isChecked={true} switchHandler={function() {}} />);
    expect(wrapper.find('.campaigns-settings__switch-text').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__switch-text').text()).toBe('On');
    wrapper.setProps({ isChecked: false });
    expect(wrapper.find('.campaigns-settings__switch-text').text()).toBe('Off');
  });
  it('Check input', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Switch text="test1" field="test2" isChecked={true} switchHandler={onClickFunc} />);
    const switcher = wrapper.find('.campaigns-settings__switch-input');
    expect(wrapper.find('.campaigns-settings__switch-input').props().checked).toBe(true);
    switcher.simulate('change', { target: { value: false }});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test2']]);
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<Switch text="test1" field="test2" isChecked={true} switchHandler={function() {}} />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.setProps({ isChecked: false });
    expect(toJson(tree)).toMatchSnapshot();
  });
});
