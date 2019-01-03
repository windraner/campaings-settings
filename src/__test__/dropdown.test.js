import React from 'react';
import Dropdown from '../components/main-content-section/tab-block/common/dropdown/dropdown';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  productsCatalogueList: [
    'Product catalogue1',
    'Product catalogue2',
    'Product catalogue3',
    'Product catalogue4',
  ],
  title: 'test1',
  value: 'test2',
  field: 'test3',
  stateHandler() {}
};

describe('<Dropdown />', () => {
  it('Check title prop', () => {
    const wrapper = shallow(<Dropdown {...mock} />);
    expect(wrapper.find('.campaigns-settings__input-title').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__input-title').text()).toBe('test1');
  });
  it('Check hint text', () => {
    const wrapper = shallow(<Dropdown {...mock} />);
    expect(wrapper.find('.campaigns-settings__dropdown-hint').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__dropdown-hint').text()).toBe('Be careful! Changing catalog will result in all existing product associations to be lost.');
  });
  it('Check input', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<Dropdown {...mock} stateHandler={onClickFunc} />);
    const input = wrapper.find('.campaigns-settings__select');
    expect(input.props().value).toBe('test2');
    input.simulate('change', { target: { value: 'foo' }});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test3', 'foo']]);
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<Dropdown {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
