import { FC } from 'react'
import { Joke } from 'types/Joke'
import { JokeCard } from '../JokeCard'
import styles from '../../styles.module.css'

type JokesGridProps = {
  jokes: Joke[]
}

export const JokesGrid: FC<JokesGridProps> = ({ jokes }) => {
  if (!jokes.length) {
    return (
      <div className={styles.noJokes}>
        <p>No jokes found. Start typing or change your input!</p>
      </div>
    )
  }

  return (
    <div className={styles.jokesGrid}>
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </div>
  )
}
