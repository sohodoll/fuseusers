import { Joke } from 'types/Joke'
import { FC } from 'react'
import { formatJokeDate } from 'utils'
import styles from '../../styles.module.css'

type JokeCardProps = {
  joke: Joke
}

export const JokeCard: FC<JokeCardProps> = ({ joke }) => {
  const formattedDate = formatJokeDate(joke.updated_at)
  return (
    <div className={`${styles.jokeCard} dark:rounded-lg dark:border-2`}>
      <p>{joke.value}</p>
      <div className={`${styles.jokeData}  dark:text-white`}>
        <span className={styles.jokeId}>{joke.id}</span>
        <span className={styles.jokeDate}>{formattedDate}</span>
      </div>
    </div>
  )
}
