/**
 * Renders a form for searching players by last name.
 *
 * @param {Object} props - The component props.
 * @param {string} props.query - The current search query.
 * @param {function} props.setQuery - The function to update the search query.
 * @param {function} props.handleSearch - The function to handle the search submission.
 * @returns {JSX.Element} The rendered PlayerSearchForm component.
 */
const PlayerSearchForm = ({ query, setQuery, handleSearch }) => (
  <form onSubmit={handleSearch}>
    <div className='search-player'>
      <input
        className='search-box'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Last name...'
      ></input>
      <button type='submit' className='standard-button search'>
        Search
      </button>
    </div>
  </form>
)

export default PlayerSearchForm
