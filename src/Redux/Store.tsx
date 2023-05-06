import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { example, user } from '../Redux/Reducers'

const reducers = combineReducers({
  example,
  user,
})


export const store = configureStore({
  reducer: reducers,
})
