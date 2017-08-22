import * as types from './action-types';

const delay = 1000;

export const increment = () => {
  return dispatch => {
    dispatch({
      type: types.INCREMENT_REQUESTED
    })

    dispatch({
      type: types.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: types.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: types.INCREMENT
      })
    }, delay)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: types.DECREMENT_REQUESTED
    })

    dispatch({
      type: types.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: types.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: types.DECREMENT
      })
    }, delay)
  }
}
