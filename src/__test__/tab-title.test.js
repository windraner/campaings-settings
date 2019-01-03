import React from 'react';
import TabTitle from '../components/main-content-section/tab-block/common/tab-title/tab-title';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<TabTitle />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<TabTitle text="test" />);
    expect(wrapper.find('.campaigns-settings__tab-title').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__tab-title').text()).toBe('test');
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<TabTitle text="test" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
