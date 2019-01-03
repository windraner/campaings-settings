import React from 'react';
import TextInput from '../components/main-content-section/tab-block/common/text-input/text-input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<TextInput />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<TextInput title="test1" value="test2" field="test3" stateHandler={function() {}} />);
    expect(wrapper.find('.campaigns-settings__input-title').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__input-title').text()).toBe('test1');
    expect(wrapper.find('.campaigns-settings__text-input').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__text-input').props().value).toBe('test2');
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<TextInput title="test1" value="test2" field="test3" stateHandler={onClickFunc} />);
    const input = wrapper.find('.campaigns-settings__text-input');
    input.simulate('change', { target: { value: 'foo' }});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test3', 'foo']]);
  });
  it('Check for hint showing', () => {
    const wrapper = shallow(<TextInput title="test1" value="test2" field="test3" stateHandler={function() {}} required={true} />);
    expect(wrapper.find('.campaigns-settings__hint-input-error').length).toBe(0);
    wrapper.setProps({ value: '' });
    expect(wrapper.find('.campaigns-settings__hint-input-error').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__hint-input-error').text()).toBe('Can not be empty');
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<TextInput title="test1" value="test2" field="test3" stateHandler={function() {}} />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.setProps({ value: '', required: true });
    expect(toJson(tree)).toMatchSnapshot();
  });
});
