import TeamStat from "./TeamStat"
import TeamStatShooting from "./TeamStatShooting"

/**
 * Renders the team totals component.
 *
 * @param {Object} teamsData - The data for both teams.
 * @returns {JSX.Element} The rendered team totals component.
 */
const TeamTotals = ({ teamsData }) => {
  const teamOne = teamsData.teamOne
  const teamTwo = teamsData.teamTwo

  // Display data once both teams are updated
  if (teamOne && teamTwo)
    return (
      <div className='stat-container'>
        <div className='headtohead'>
          <TeamStat
            statTitle={"Offensive Rating"}
            teamOneStat={teamOne.points}
            teamTwoStat={teamTwo.points}
          />
          <TeamStat
            statTitle={"Team Assists"}
            teamOneStat={teamOne.assists}
            teamTwoStat={teamTwo.assists}
          />
          <TeamStat
            statTitle={"Team Rebounds"}
            teamOneStat={teamOne.rebounds}
            teamTwoStat={teamTwo.rebounds}
          />
          <TeamStatShooting
            statTitle={"Field Goal"}
            teamOneStat={teamOne.fgp}
            teamTwoStat={teamTwo.fgp}
          />
          <TeamStatShooting
            statTitle={"Field Goal (3pt)"}
            teamOneStat={teamOne.tpp}
            teamTwoStat={teamTwo.tpp}
          />
          <TeamStatShooting
            statTitle={"Free Throw"}
            teamOneStat={teamOne.ftp}
            teamTwoStat={teamTwo.ftp}
          />
        </div>
      </div>
    )
}
export default TeamTotals
