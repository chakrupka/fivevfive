/**
 * Renders a component that displays information about a selected player.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.selectedPlayer - The selected player.
 * @param {Function} props.changePlayer - The function to change the selected player.
 * @returns {JSX.Element} The rendered component.
 */
const SearchedPlayer = ({ selectedPlayer, changePlayer }) => {
  // Unpack player information into HTML elements
  return (
    <div className='player'>
      <p>
        {selectedPlayer.playerInfo.firstname}{" "}
        {selectedPlayer.playerInfo.lastname}
      </p>
      <img src={selectedPlayer.playerHeadshot}></img>
      <div className='stats'>
        {selectedPlayer.playerStats ? (
          <div>
            <p>Season Stats</p>
            <p>
              {selectedPlayer.playerStats["PTS"]} /{" "}
              {selectedPlayer.playerStats["AST"]} /{" "}
              {selectedPlayer.playerStats["REB"]}
            </p>
            <p>Shooting Splits</p>
            <p>
              {selectedPlayer.playerStats["FG_PCT"]} /{" "}
              {selectedPlayer.playerStats["FG3_PCT"]} /{" "}
              {selectedPlayer.playerStats["FT_PCT"]}
            </p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      {selectedPlayer.playerStats && (
        <button
          className='standard-button'
          id='change-player'
          onClick={changePlayer}
        >
          Change
        </button>
      )}
    </div>
  )
}

export default SearchedPlayer
