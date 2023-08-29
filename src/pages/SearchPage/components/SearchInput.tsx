import styles from '../styles.module.css'

export const SearchInput = () => {
  return (
    <div>
      <label htmlFor="searchInput" />
      <input
        className={styles.searchInput}
        id="searchInput"
        type="text"
        placeholder="Search jokes..."
      />
    </div>
  )
}
