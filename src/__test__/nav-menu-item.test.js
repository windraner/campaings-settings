import React from 'react';
import NavMenuItem from '../components/main-content-section/nav-menu/nav-menu-item/nav-menu-item';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { ACTIVE_TAB } from '../constans';

configure({ adapter: new Adapter() });

const mock = {
  name: 'test',
  menuAlerts: [],
  activeTab: 'test',
  stateHandler() {},
};

describe('<NavMenuItem />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<NavMenuItem {...mock} />);
    expect(wrapper.find('.campaigns-settings__nav-menu-item').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__nav-menu-item').text()).toBe(mock.name);
  });
  it('Check for hover and active class', () => {
    const wrapper = shallow(<NavMenuItem {...mock} />);
    wrapper.setState({ isHovered: false });
    wrapper.setProps({ activeTab: 'notTest' });
    expect(wrapper.find('.campaigns-settings__nav-menu-item_default').length).toBe(1);
    wrapper.setState({ isHovered: true });
    expect(wrapper.find('.campaigns-settings__nav-menu-item_default').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__nav-menu-item_hover').length).toBe(1);
    wrapper.setProps({ activeTab: mock.name });
    expect(wrapper.find('.campaigns-settings__nav-menu-item_hover').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__nav-menu-item_active').length).toBe(1);
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<NavMenuItem {...mock} stateHandler={onClickFunc} />);
    const button = wrapper.find('.campaigns-settings__nav-menu-item');
    button.simulate('click');
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([[ACTIVE_TAB, mock.name]]);
  });
  it('Check for alert icon', () => {
    const wrapper = shallow(<NavMenuItem {...mock} />);
    expect(wrapper.find('.campaigns-settings__nav-menu-icon').length).toBe(0);
    wrapper.setProps({ menuAlerts: [''] });
    expect(wrapper.find('.campaigns-settings__nav-menu-icon').length).toBe(1);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<NavMenuItem {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.setProps({ menuAlerts: [''] });
    expect(toJson(tree)).toMatchSnapshot();
  });
});
