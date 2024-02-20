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
      <p className='name'>
        {selectedPlayer.playerInfo.firstname}{" "}
        {selectedPlayer.playerInfo.lastname}
      </p>
      {selectedPlayer.playerStats ? (
        <div className='headshot-and-stats'>
          <img
            src={selectedPlayer.playerHeadshot}
            className='headshot-search'
          ></img>
          <div className='stats'>
            <p>Season Stats</p>
            <p className='stat'>
              {selectedPlayer.playerStats["PTS"]} /{" "}
              {selectedPlayer.playerStats["AST"]} /{" "}
              {selectedPlayer.playerStats["REB"]}
            </p>
            <p>Shooting Splits</p>
            <p className='stat'>
              {selectedPlayer.playerStats["FG_PCT"]} /{" "}
              {selectedPlayer.playerStats["FG3_PCT"]} /{" "}
              {selectedPlayer.playerStats["FT_PCT"]}
            </p>
          </div>
          <button
            className='standard-button  change-player'
            onClick={changePlayer}
          >
            🗑️
          </button>
        </div>
      ) : (
        <p className='loading-data'>Loading data...</p>
      )}
    </div>
  )
}

export default SearchedPlayer
