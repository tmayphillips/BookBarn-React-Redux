import * as actionTypes from '../actions/actionTypes'

// set up the initial state
const initialState = {
  books: []
}

// create the reducer
const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NEW_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload)
      }

    case actionTypes.BOOK_FETCHED:
      return {
        ...state,
        books: action.books,
      }

    case actionTypes.SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.value
      }

    default:
      console.log("Oops something is wrong");
  }

  return state
}

// export the reducer
export default booksReducer
