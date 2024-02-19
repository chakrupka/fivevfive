/**
 * Renders a compared player component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.teams - Array of teams data.
 * @param {string} props.currentTeam - Current selected team.
 * @returns {JSX.Element} The compared player component.
 */
const ComparedPlayer = ({ teams, currentTeam }) => {
  /* Initialize state hooks
  teamData = data of the current selected team
  teamNumber = sets whether teamOne or teamTwo is selected
   */
  const teamData = teams[currentTeam]
  const teamNumber = currentTeam === "teamOne" ? 1 : 2

  return (
    <div className={`team${teamNumber}-display`}>
      {teamData.map((player, index) => (
        <div
          key={`comp-team-${teamNumber}-player-${index}`}
          className={`team${teamNumber}-player`}
        >
          <img className='player-headshot' src={player.playerHeadshot}></img>

          <div className={`team${teamNumber}-player-info`}>
            {player.playerInfo.firstname} {player.playerInfo.lastname}
            <div className='player-stats'>
              <p>
                {player.playerStats["PTS"]} / {player.playerStats["AST"]} /{" "}
                {player.playerStats["REB"]}
              </p>

              <p>
                {player.playerStats["FG_PCT"]} / {player.playerStats["FG3_PCT"]}{" "}
                / {player.playerStats["FT_PCT"]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ComparedPlayer
