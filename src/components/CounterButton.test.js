import React from 'react'
import { shallow } from 'enzyme';
import CounterButton from './CounterButton'

it('Displays correctly', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
})

it('Expects state changes', () => {
    const wrapper = shallow(<CounterButton />);
    const instance = wrapper.instance();

    let currentCount = instance.state.count;

    expect(wrapper.state('count')).toEqual(0);
    expect(instance.shouldComponentUpdate({}, { count: currentCount + 1 })).toEqual(true);
    expect(instance.shouldComponentUpdate({}, { count: currentCount })).toEqual(false);
})

it('click updates state', () => {
    const wrapper = shallow(<CounterButton />);
    const instance = wrapper.instance();

    expect(wrapper.state('count')).toEqual(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('count')).toEqual(1);
})