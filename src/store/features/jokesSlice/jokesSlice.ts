import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getJokesByQuery } from 'api'
import { RootState } from 'store/store'
import { Joke } from 'types/Joke'
import { JokesResponse } from 'types/JokesResponse'

const initialState = {
  jokes: [] as Joke[],
  totalCount: 0,
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: undefined as string | undefined,
}

export const fetchJokesByQuery = createAsyncThunk<
  JokesResponse,
  string,
  { rejectValue: string }
>('jokes/fetchJokesByQuery', async (query: string, thunkAPI) => {
  try {
    const response = await getJokesByQuery(query)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error as string)
  }
})

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJokesByQuery.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchJokesByQuery.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.jokes = action.payload.result
      state.totalCount = action.payload.total
    })
    builder.addCase(fetchJokesByQuery.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  },
})

export const selectAllJokes = (state: RootState) => state.jokes.jokes

export const selectTotalCount = (state: RootState) => state.jokes.totalCount

export const selectJokesStatus = (state: RootState) => state.jokes.status

export const selectJokesError = (state: RootState) => state.jokes.error

export const JokeSliceReducer = jokesSlice.reducer
