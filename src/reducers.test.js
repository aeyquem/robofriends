import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

import * as reducers from './reducers'

describe('SEARCH ROBOTS', () => {
    const initialState = {
        searchField: ''
    }

    it('returns initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialState, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })
})

describe('REQUEST ROBOTS', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('returns initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('handles REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error: ''
        })
    })

    it('handles REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@mail.com'
            }]
        })).toEqual({
            isPending: false,
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@mail.com'
            }],
            error: ''
        })
    })

    it('handles REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error!!!'
        })).toEqual({
            isPending: false,
            robots: [],
            error: 'error!!!'
        })
    })

})