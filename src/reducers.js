import { combineReducers } from 'redux'
import {
  SELECT_COORDINATES,
  INVALIDATE_COORDINATES,
  REQUEST_WEATHERDATA,
  RECEIVE_WEATHERDATA
} from './actions'

function selectedCoords(state = '', action) {
  switch (action.type) {
    case SELECT_COORDINATES:
      return action.coords
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_COORDINATES:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_WEATHERDATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_WEATHERDATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByCoords(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_COORDINATES:
    case RECEIVE_WEATHERDATA:
    case REQUEST_WEATHERDATA:
      return Object.assign({}, state, {
        [action.coords]: posts(state[action.coords], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByCoords,
  selectedCoords
})

export default rootReducer