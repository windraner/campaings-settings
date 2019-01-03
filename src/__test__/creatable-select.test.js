import React from 'react';
import CreatableSelectInput from '../components/main-content-section/tab-block/common/creatable-select/creatable-select';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const mock = {
  text: 'test1',
  itemsList: ['qwe', 'rty'],
  tooltipText: 'test2',
  field: 'test3',
  stateHandler() {}
};

describe('<CreatableSelectInput />', () => {
  it('Check text prop', () => {
    const wrapper = shallow(<CreatableSelectInput {...mock} />);
    expect(wrapper.find('.campaigns-settings__input-title').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__input-title').text()).toBe('test1');
  });
  it('Check tooltipText prop', () => {
    const wrapper = shallow(<CreatableSelectInput {...mock} />);
    expect(wrapper.find('TooltipIcon').length).toBe(1);
    wrapper.setProps({ tooltipText: '' });
    expect(wrapper.find('TooltipIcon').length).toBe(0);
  });
  it('Check handleChange', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CreatableSelectInput {...mock} stateHandler={onClickFunc} />);
    wrapper.instance().handleChange([{value: 'qwe', label: 'qwe'}]);
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test3', ['qwe']]]);
  });
  it('Check blurHandler', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CreatableSelectInput {...mock} stateHandler={onClickFunc} />);
    wrapper.setState({ inputValue: 'asd' });
    const mockedEvent = { preventDefault() {} };
    wrapper.instance().blurHandler(mockedEvent);
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test3', ['qwe', 'rty', 'asd']]]);
  });
  it('Check handleKeyDown success', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CreatableSelectInput {...mock} stateHandler={onClickFunc} />);
    wrapper.setState({ inputValue: 'asd' });
    const mockedEvent = { preventDefault() {}, key: 'Enter' };
    wrapper.instance().handleKeyDown(mockedEvent);
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test3', ['qwe', 'rty', 'asd']]]);
  });
  it('Check handleKeyDown reject', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<CreatableSelectInput {...mock} stateHandler={onClickFunc} />);
    wrapper.setState({ inputValue: 'asd' });
    const mockedEvent = { preventDefault() {}, key: 'q' };
    wrapper.instance().handleKeyDown(mockedEvent);
    expect(onClickFunc).not.toBeCalled();
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<CreatableSelectInput {...mock} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
