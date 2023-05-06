// Actions
export const SET_READY = 'RNN/Example/SET_READY'

// Initial State
export const initialState = {
  ready: false,
}

interface actionObj {
  type: string;
  data?: any;
}


// Reducer
export const example = (state = initialState, action:actionObj) => {
  const { type, data } = action

  switch (type) {
    case SET_READY:
      return { ...state, ready: data }

    default:
      return state
  }
}

// Action creators
export const setReady = (data:boolean) => {
  console.log('action creator: setReady')
  return ({ type: SET_READY, data })
}
