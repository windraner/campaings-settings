import React from 'react';
import CampaignsSettings from '../campaigns-settings';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import image from '../test.png';
import toJson from 'enzyme-to-json';

import * as CONSTANT from '../constans';

configure({ adapter: new Adapter() });

const data = {
  name: 'Summer Sales 10%',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  productCatalogue: 'Product catalogue2',
  isShoppableLink: false,
  isMediaCollection: true,
  mediaCollectionList: ['qwe', 'rty'],
  isPhotosModerationQueue: false,
  userBlackList: ['asd', 'fgh'],
  hashtagBlackList: ['zxc', 'vbn'],
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

const mock = {
  data,
  productsCatalogueList: [
    'Product catalogue1',
    'Product catalogue2',
    'Product catalogue3',
    'Product catalogue4',
  ],
  onSave() {},
  onCancel() {},
};

const defaultState = {
  [CONSTANT.ACTIVE_TAB]: CONSTANT.MENU_LIST[1],
  [CONSTANT.NAME]: data.name,
  [CONSTANT.DESCRIPTION]: data.description,
  [CONSTANT.PRODUCT_CATALOGUE]: data.productCatalogue,
  [CONSTANT.IS_SHOPPABLE_LINK]: data.isShoppableLink,
  [CONSTANT.IS_MEDIA_COLLECTION]: data.isMediaCollection,
  [CONSTANT.MEDIA_COLLECTION_LIST]: data.mediaCollectionList,
  [CONSTANT.IS_PHOTO_MODERATION_QUEUE]: data.isPhotosModerationQueue,
  [CONSTANT.USER_BLACK_LIST]: data.userBlackList,
  [CONSTANT.HASHTAG_BLACK_LIST]: data.hashtagBlackList,
  [CONSTANT.ACCOUNTS_SETTINGS_ITEMS]: data.accountsSettingsItems,
  [CONSTANT.SHOW_ERROR_ALERT]: false,
  [CONSTANT.SHOW_SUCCESS_ALERT]: false,
};

describe('<CampaignsSettings />', () => {
  it('Check state', () => {
    const wrapper = shallow(<CampaignsSettings {...mock} />);
    expect(wrapper.instance().state).toEqual(defaultState);
  });
  it('Check stateHandler', () => {
    const wrapper = shallow(<CampaignsSettings {...mock} />);
    expect(wrapper.instance().state[CONSTANT.NAME]).toBe('Summer Sales 10%');
    expect(wrapper.instance().state[CONSTANT.SHOW_ERROR_ALERT]).toBe(false);
    wrapper.instance().stateHandler(CONSTANT.NAME, 'test');
    expect(wrapper.instance().state[CONSTANT.NAME]).toBe('test');
    wrapper.instance().stateHandler(CONSTANT.NAME, '');
    expect(wrapper.instance().state[CONSTANT.NAME]).toBe('');
    expect(wrapper.instance().state[CONSTANT.SHOW_ERROR_ALERT]).toBe(true);
  });
  it('Check switchHandler', () => {
    const wrapper = shallow(<CampaignsSettings {...mock} />);
    expect(wrapper.instance().state[CONSTANT.IS_SHOPPABLE_LINK]).toBe(false);
    wrapper.instance().switchHandler(CONSTANT.IS_SHOPPABLE_LINK);
    expect(wrapper.instance().state[CONSTANT.IS_SHOPPABLE_LINK]).toBe(true);
  });
  it('Check saveHandler', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CampaignsSettings {...mock} onSave={onClickFunc} />);
    expect(wrapper.instance().state[CONSTANT.SHOW_SUCCESS_ALERT]).toBe(false);
    wrapper.instance().saveHandler();
    expect(wrapper.instance().state[CONSTANT.SHOW_SUCCESS_ALERT]).toBe(true);
    expect(onClickFunc).toBeCalled();
  });
  it('Check saveHandler with errors', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CampaignsSettings {...mock} onSave={onClickFunc} />);
    wrapper.setState({ [CONSTANT.NAME]: '' });
    wrapper.instance().saveHandler();
    expect(wrapper.instance().state[CONSTANT.SHOW_ERROR_ALERT]).toBe(true);
    expect(onClickFunc).not.toBeCalled();
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<CampaignsSettings {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
