import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from 'store/store'
import { fetchJokesByQuery, selectTotalCount } from 'store/features'
import styles from '../../styles.module.css'

export const SearchInput = () => {
  const dispatch = useDispatch<AppDispatch>()
  const totalCount = useAppSelector(selectTotalCount)
  const [query, setQuery] = useState('')

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  // using useEffect to send request to API with debounce to avoid sending request on every key press
  useEffect(() => {
    console.log('here')
    if (query.length < 3) return

    const debounceTimeout = setTimeout(() => {
      dispatch(fetchJokesByQuery(query))
    }, 300)

    return () => clearTimeout(debounceTimeout)
  }, [query, dispatch])

  return (
    <>
      <div className={styles.searchInputWrapper}>
        <label htmlFor="searchInput" />
        <input
          autoFocus
          className={styles.searchInput}
          id="searchInput"
          type="text"
          placeholder="Search jokes..."
          onChange={onSearchInputChange}
          value={query}
        />
      </div>
      <div className={styles.searchTotalCount}>
        <span>Total count:</span>
        <span>{totalCount}</span>
      </div>
    </>
  )
}
