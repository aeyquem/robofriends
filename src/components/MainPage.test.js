import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'

let wrapper;
beforeEach(() => {
    const mockProps = {
        searchField: '',
        robots: [],
        isPending: false,
        error: '',
        onRequestRobots: jest.fn()
    };

    wrapper = shallow(<MainPage {...mockProps} />)
})

it('Renders', () => {
    expect(wrapper).toMatchSnapshot();
})

it('Filter robots', () => {

    const mockProps2 = {
        searchField: 'l',
        robots: [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz'
            },
        ],
        isPending: false,
        error: '',
        onRequestRobots: jest.fn()
    };

    const wrapper2 = shallow(<MainPage {...mockProps2} />)

    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        },
    ]);
})


it('Shows loading', () => {

    const mockProps3 = {
        searchField: '',
        robots: [],
        isPending: true,
        error: '',
        onRequestRobots: jest.fn()
    };

    const wrapper3 = shallow(<MainPage {...mockProps3} />)

    expect(wrapper3).toMatchSnapshot();
})