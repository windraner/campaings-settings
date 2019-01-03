import React from 'react';
import Tab1 from '../components/main-content-section/tab-block/tab-1/tab-1';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  isShoppableLink: true,
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
};

describe('<Tab1 />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Tab1 {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
