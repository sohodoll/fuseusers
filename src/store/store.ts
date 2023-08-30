import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { JokeSliceReducer } from './features'

export const store = configureStore({
  reducer: {
    jokes: JokeSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// exporting a custom hook to use the typed useSelector hook in our components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
