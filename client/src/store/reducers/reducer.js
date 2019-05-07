import * as actionTypes from '../actions/actionTypes'
import {connect} from 'react-dom'

// set up the initial state
const initialState = {
  counter: 0, // each one is called a slice
  books: [],
  isAuthenticated: false,
  userID: ''
}

// create the reducer
const rootReducer = (state = initialState, action) => {

  switch(action.type) {

    case actionTypes.ADD_NEW_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload)
      }

    case actionTypes.ON_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.token != null ? true : false,
        userID: action.userID
      }

    default:
      console.log("Oops something is wrong");
  }

  return state
}

// export the reducer
export default rootReducer
