import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from 'store/store'
import {
  fetchJokesByQuery,
  selectJokesStatus,
  selectTotalCount,
} from 'store/features'
import { Spinner } from 'components'
import styles from '../../styles.module.css'

export const SearchInput = () => {
  const dispatch = useDispatch<AppDispatch>()
  const totalCount = useAppSelector(selectTotalCount)
  const jokesStatus = useAppSelector(selectJokesStatus)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  const onSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
      if (event.target.value.length < 3) return
      setIsLoading(true)
    },
    []
  )

  // handling spinner visibility
  useEffect(() => {
    if (query.length < 3) {
      setIsLoading(false)
    }
  }, [query])

  useEffect(() => {
    if (jokesStatus === 'succeeded') {
      setIsLoading(false)
    }
  }, [jokesStatus])

  // using useEffect to send request to API with debounce to avoid sending request on every key press
  useEffect(() => {
    if (query.length < 3) return

    const debounceTimeout = setTimeout(() => {
      dispatch(fetchJokesByQuery(query))
    }, 300)

    return () => clearTimeout(debounceTimeout)
  }, [query, dispatch])

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchInputWrapper}>
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
      <div className={styles.searchSpinner}>{isLoading && <Spinner />}</div>
      <div className={styles.searchTotalCount}>
        <span>Total count: </span>
        <span>{totalCount}</span>
      </div>
    </div>
  )
}
