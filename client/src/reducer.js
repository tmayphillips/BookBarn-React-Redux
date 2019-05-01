// set up the initial state
const initialState = {
  title: '',
  genre: '',
  publisher: '',
  year: '',
  imageURL: '',
  books: [],
}

// create the reducer
const rootReducer = (state = initialState, action) => {
  if(action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }
  else if(action.type === "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1,
    }
  }

  return state
}

// export the reducer
export default rootReducer
