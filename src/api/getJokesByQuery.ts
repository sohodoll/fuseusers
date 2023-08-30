import { JokesResponse } from 'types/JokesResponse'
import { BASE_URL } from './consts'

export const getJokesByQuery = async (
  query: string
): Promise<JokesResponse> => {
  const response = await fetch(`${BASE_URL}/search?query=${query}`)

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  const data = await response.json()

  return data
}
