import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleWare]);

import * as actions from './actions'

describe('SEARCH', () => {
    it('create search robots action', () => {
        expect(actions.setSearchField('')).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: ''
        })
    })

    it('create search robots action with text', () => {
        expect(actions.setSearchField('asd')).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: 'asd'
        })
    })
})

describe('ROBOTS', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING })

})