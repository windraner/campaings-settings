import React from 'react';
import TooltipIcon from '../components/main-content-section/tab-block/common/tooltip-icon/tooltip-icon';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<TooltipIcon />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<TooltipIcon text="test" />);
    expect(wrapper.find('.campaigns-settings__tooltip-icon').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__tooltip-icon').text()).toBe('test');
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<TooltipIcon text="test" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
