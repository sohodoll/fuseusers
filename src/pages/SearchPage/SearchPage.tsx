import { useAppSelector } from 'store/store'
import { selectAllJokes } from 'store/features'
import { JokesGrid } from './components/JokesGrid'
import { SearchInput } from './components/SearchInput'
import styles from './styles.module.css'

export const SearchPage = () => {
  const jokes = useAppSelector(selectAllJokes)

  return (
    <div className={styles.searchPage}>
      <SearchInput />
      <JokesGrid jokes={jokes} />
    </div>
  )
}
