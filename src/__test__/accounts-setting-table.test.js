import React from 'react';
import AccountsSettingTable from '../components/main-content-section/tab-block/common/accounts-setting-table/accounts-setting-table';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import image from '../test.png';
import toJson from 'enzyme-to-json';

import { ACCOUNTS_SETTINGS_ITEMS } from '../constans';

configure({ adapter: new Adapter() });

const mock = {
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
  stateHandler() {}
};

const result = [
  {
    id: '1',
    url: image,
    userName : 'Instagram',
    platform: 'Instagram',
    status: 'Verified',
    userFeed: true,
    taggedFeed: true,
    mentionedFeed: true
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
];

describe('<AccountsSettingTable />', () => {
  it('Check currentSwitchHandler', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<AccountsSettingTable {...mock} stateHandler={onClickFunc} />);
    wrapper.instance().currentSwitchHandler({id: '1', field: 'mentionedFeed'});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([[ACCOUNTS_SETTINGS_ITEMS, result]]);
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<AccountsSettingTable {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
