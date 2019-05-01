// set up the initial state
const initialState = {
  counter: 99, // each one is called a slice
  books: [],
  inAuthenticated: false
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
