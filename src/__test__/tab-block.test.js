import React from 'react';
import TabBlock from '../components/main-content-section/tab-block/tab-block';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import image from '../test.png';
import toJson from 'enzyme-to-json';

import { MENU_LIST } from '../constans';

configure({ adapter: new Adapter() });

const mock = {
  userBlackList: ['asd', 'fgh'],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  hashtagBlackList: ['zxc', 'vbn'],
  isMediaCollection: true,
  isPhotosModerationQueue: true,
  isShoppableLink: true,
  mediaCollectionList: ['qwe', 'rty'],
  name: 'Summer Sales 10%',
  productCatalogue: 'Product catalogue2',
  productsCatalogueList: [
    'Product catalogue1',
    'Product catalogue2',
    'Product catalogue3',
    'Product catalogue4',
  ],
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

describe('<TabBlock />', () => {
  it('matches the snapshot tab 1', () => {
    const tree = shallow(<TabBlock {...mock} activeTab={MENU_LIST[0]} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot tab 2', () => {
    const tree = shallow(<TabBlock {...mock} activeTab={MENU_LIST[1]} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot tab 3', () => {
    const tree = shallow(<TabBlock {...mock} activeTab={MENU_LIST[2]} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it('matches the snapshot tab 4', () => {
    const tree = shallow(<TabBlock {...mock} activeTab={MENU_LIST[3]} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
