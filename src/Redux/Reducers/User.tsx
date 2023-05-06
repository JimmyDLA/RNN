// Actions
export const SET_ON_MAIN = 'RNN/User/SET_ON_MAIN'

// Initial State
export const initialState = {
  onMain: false,
}

interface actionObj {
  type: string;
  data?: any;
}

// Reducer
export const user = (state = initialState, action:actionObj) => {
  const { type, data } = action

  switch (type) {
    case SET_ON_MAIN:
      return { ...state, onMain: data }

    default:
      return state
  }
}

// Action creators
export const setOnMain = (data:boolean) => {
  console.log('action creator: setOnMain')
  return ({ type: SET_ON_MAIN, data })
}
