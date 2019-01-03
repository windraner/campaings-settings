import React from 'react';
import Tab4 from '../components/main-content-section/tab-block/tab-4/tab-4';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Tab4 />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Tab4 />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
