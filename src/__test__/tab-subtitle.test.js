import React from 'react';
import TabSubtitle from '../components/main-content-section/tab-block/common/tab-subtitle/tab-subtitle';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<TabSubtitle />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<TabSubtitle text="test" />);
    expect(wrapper.find('.campaigns-settings__tab-subtitle').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__tab-subtitle').text()).toBe('test');
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<TabSubtitle text="test" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
