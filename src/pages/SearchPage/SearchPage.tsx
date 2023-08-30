import { useAppSelector } from 'store/store'
import { selectAllJokes } from 'store/features'
import { SunIcon } from 'components'
import { useEffect, useState } from 'react'
import { JokesGrid } from './components/JokesGrid'
import { SearchInput } from './components/SearchInput'
import styles from './styles.module.css'

export const SearchPage = () => {
  const jokes = useAppSelector(selectAllJokes)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={styles.searchPage}>
      <button type="button" onClick={toggleTheme}>
        <SunIcon />
      </button>
      <SearchInput />
      <JokesGrid jokes={jokes} />
    </div>
  )
}
