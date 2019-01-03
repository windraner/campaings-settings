import React from 'react';
import AccountsSettingItem from '../components/main-content-section/tab-block/common/accounts-setting-table/accounts-setting-item/accounts-setting-item';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import image from '../test.png';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  item: {
    id: '1',
    url: image,
    userName : 'Instagram1',
    platform: 'Instagram',
    status: 'Verified',
    userFeed: true,
    taggedFeed: true,
    mentionedFeed: false
  },
  currentSwitchHandler() {}
};

const altItme = {
  id: '1',
  url: image,
  userName : 'Instagram1',
  platform: 'Twitter',
  status: 'Rejected',
  userFeed: true,
  taggedFeed: true,
  mentionedFeed: false
};

describe('<AccountsSettingItem />', () => {
  it('Check data to render', () => {
    const wrapper = shallow(<AccountsSettingItem {...mock} />);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-image').props().src).toBe(image);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-name').text()).toBe('Instagram1');
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-status').text()).toBe('Verified');
    expect(wrapper.find('Switch').map((node) => node.props().isChecked)).toEqual([ true, true, false ]);
    expect(wrapper.find('Switch').map((node) => node.props().field)).toEqual([ {field: 'userFeed', id: '1'}, {field: 'taggedFeed', id: '1'}, {field: 'mentionedFeed', id: '1'} ]);
  });
  it('Check class names', () => {
    const wrapper = shallow(<AccountsSettingItem {...mock} />);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-tw').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-status-rejected').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-container-disabled').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-status-verified').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-inst').length).toBe(1);
    wrapper.setProps({ item: altItme });
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-status-verified').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-inst').length).toBe(0);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-tw').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-status-rejected').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__accounts-setting-table-item-container-disabled').length).toBe(1);
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<AccountsSettingItem {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
