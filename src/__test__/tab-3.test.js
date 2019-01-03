import React from 'react';
import Tab3 from '../components/main-content-section/tab-block/tab-3/tab-3';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  userBlackList: ['asd', 'fgh'],
  hashtagBlackList: ['zxc', 'vbn'],
  stateHandler() {},
};

describe('<Tab3 />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Tab3 {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
