import * as actionTypes from '../actions/actionTypes'

// set up the initial state
const initialState = {
  counter: 0,
}

// create the reducer
const counterReducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      }

    default:
      console.log("Oops something is wrong");
  }

  return state
}

// export the reducer
export default counterReducer
