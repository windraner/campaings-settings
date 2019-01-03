import React from 'react';
import NavMenu from '../components/main-content-section/nav-menu/nav-menu';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { MENU_LIST } from '../constans';

configure({ adapter: new Adapter() });

describe('<NavMenu />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<NavMenu stateHandler={function() {}} activeTab={MENU_LIST[0]} menuAlerts={[]} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
