import  * as actionTypes from './actionTypes'

export const incCounter = () => {
  return {
    type: actionTypes.INC_COUNTER
  }
}

export const decCounter = () => {
  return {
    type: actionTypes.DEC_COUNTER
  }
}

export const addNewBook = () => {
  return {
    type: actionTypes.ADD_NEW_BOOK
  }
}

export const searchTerm = () => {
  return {
    type: actionTypes.SEARCH_TERM
  }
}

export const bookFetched = (searchTerm) => {
  return dispatch => {
    fetch('https:www.googleapis.com/books/v1/volumes?q=' + searchTerm)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({type: actionTypes.BOOK_FETCHED, books: json.items})
      })

  }
}
