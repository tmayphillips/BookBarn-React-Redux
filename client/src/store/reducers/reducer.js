import * as actionTypes from './actions/actionTypes'

// set up the initial state
const initialState = {
  counter: 0, // each one is called a slice
  books: [],
  inAuthenticated: false
}

// create the reducer
const rootReducer = (state = initialState, action) => {

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

    case actionTypes.ADD_NEW_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload)
      }

    default:
      console.log("Oops something is wrong");
  }

  return state
}

// export the reducer
export default rootReducer
