//configuring store using redux

import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../Store/Reducers/Todo-Reducer'

export const store = configureStore({
  reducer:todosReducer

})