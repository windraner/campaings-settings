import React from 'react';
import Tab4 from '../components/main-content-section/tab-block/tab-4/tab-4';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  isMediaRights: false,
  hashtagRightsList: ['zxc', 'vbn'],
  termsAndConditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  stateHandler() {},
  switchHandler() {},
};

describe('<Tab4 />', () => {
  it('Check for media rights switcher', () => {
    const wrapper = shallow(<Tab4 {...mock} />);
    expect(wrapper.find('.campaigns-settings__border-separator').length).toBe(0);
    wrapper.setProps({ isMediaRights: true });
    expect(wrapper.find('.campaigns-settings__border-separator').length).toBe(1);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<Tab4 {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.setProps({ isMediaRights: true });
    expect(toJson(tree)).toMatchSnapshot();
  });
});
