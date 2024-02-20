/**
 * Renders the search results component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.results - The array of search results.
 * @param {Function} props.setSelectedPlayer - The function to set the selected player.
 * @returns {JSX.Element} The search results component.
 */
const SearchResults = ({ results, setSelectedPlayer }) => {
  return (
    <div className='results'>
      {results.map(
        (player, index) => (
          console.log(player),
          (
            <p
              key={index}
              onClick={() => setSelectedPlayer({ playerInfo: player })}
            >
              {player.firstname} {player.lastname}
            </p>
          )
        )
      )}
    </div>
  )
}

export default SearchResults
