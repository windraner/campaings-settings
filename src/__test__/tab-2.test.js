import React from 'react';
import Tab2 from '../components/main-content-section/tab-block/tab-2/tab-2';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import image from '../test.png';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  isMediaCollection: false,
  isPhotosModerationQueue: true,
  mediaCollectionList: ['qwe', 'rty'],
  stateHandler() {},
  switchHandler() {},
  accountsSettingsItems: [
    {
      id: '1',
      url: image,
      userName : 'Instagram',
      platform: 'Instagram',
      status: 'Verified',
      userFeed: true,
      taggedFeed: true,
      mentionedFeed: false
    },
    {
      id: '2',
      url: image,
      userName : 'Blackmirror',
      platform: 'Twitter',
      status: 'Rejected',
      userFeed: false,
      taggedFeed: false,
      mentionedFeed: false
    }
  ],
};

describe('<Tab2 />', () => {
  it('Check for media collection switcher', () => {
    const wrapper = shallow(<Tab2 {...mock} />);
    expect(wrapper.find('.campaigns-settings__border-separator').length).toBe(0);
    wrapper.setProps({ isMediaCollection: true });
    expect(wrapper.find('.campaigns-settings__border-separator').length).toBe(1);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<Tab2 {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.setProps({ isMediaCollection: true });
    expect(toJson(tree)).toMatchSnapshot();
  });
});
