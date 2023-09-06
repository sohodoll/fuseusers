import { useAppSelector } from 'store/store'
import { selectAllJokes } from 'store/features'
import { MoonIcon, SunIcon } from 'components'
import { useCallback, useEffect, useState } from 'react'
import { JokesGrid } from './components/JokesGrid'
import { SearchInput } from './components/SearchInput'
import styles from './styles.module.css'

export const SearchPage = () => {
  const jokes = useAppSelector(selectAllJokes)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={styles.searchPage}>
      <button type="button" onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
      <SearchInput />
      <JokesGrid jokes={jokes} />
    </div>
  )
}