import React from 'react';
import AccountEditButton from '../components/main-content-section/tab-block/common/account-edit-button/account-edit-button';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<AccountEditButton />', () => {
  it('matches the snapshot hide', () => {
    const tree = shallow(<AccountEditButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
