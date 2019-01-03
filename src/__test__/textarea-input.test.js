import React from 'react';
import TextareaInput from '../components/main-content-section/tab-block/common/textarea-input/textarea-input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<TextareaInput />', () => {
  it('Check for className and text', () => {
    const wrapper = shallow(<TextareaInput title="test1" value="test2" field="test3" stateHandler={function() {}} />);
    expect(wrapper.find('.campaigns-settings__input-title').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__input-title').text()).toBe('test1');
    expect(wrapper.find('.campaigns-settings__textarea-input').length).toBe(1);
    expect(wrapper.find('.campaigns-settings__textarea-input').props().value).toBe('test2');
  });
  it('Check for callback is called', () => {
    const onClickFunc = jest.fn();
    const wrapper = shallow(<TextareaInput title="test1" value="test2" field="test3" stateHandler={onClickFunc} />);
    const input = wrapper.find('.campaigns-settings__textarea-input');
    input.simulate('change', { target: { value: 'foo' }});
    expect(onClickFunc).toBeCalled();
    expect(onClickFunc.mock.calls).toEqual([['test3', 'foo']]);
  });
  it('matches the snapshot hide', () => {
    const tree = shallow(<TextareaInput title="test1" value="test2" field="test3" stateHandler={function() {}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
