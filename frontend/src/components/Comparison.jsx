import { useEffect, useState } from "react"
import ComparedPlayer from "./ComparedPlayer"
import TeamsTotals from "./TeamTotals"
import RecentNews from "./RecentNews"

/**
 * Renders a comparison component for two teams.
 *
 * @component
 * @param {Object} teams - The teams data.
 * @returns {JSX.Element} Comparison component.
 */
const Comparison = ({ teams }) => {
  // Intialize state hook: teamsData holds data for both teams
  const [teamsData, setTeamsData] = useState({})

  // Gathers data for both teams to be used in team comparison.
  useEffect(() => {
    // Gather data from team
    const gatherTeamData = ({ team }) => {
      // Intiailze empty team totals
      const teamData = {
        assists: 0,
        rebounds: 0,
        points: 0,
        fgp: 0,
        ftp: 0,
        tpp: 0,
      }

      // Gather totals and averages
      team.map((player) => {
        teamData.assists = player.playerStats.AST + teamData.assists
        teamData.rebounds = player.playerStats.REB + teamData.rebounds
        teamData.points = player.playerStats.PTS + teamData.points
        teamData.fgp = player.playerStats.FG_PCT + teamData.fgp
        teamData.ftp = player.playerStats.FT_PCT + teamData.ftp
        teamData.tpp = player.playerStats.FG3_PCT + teamData.tpp
      })
      teamData.fgp = Math.round(teamData.fgp / 5)
      teamData.ftp = Math.round(teamData.ftp / 5)
      teamData.tpp = Math.round(teamData.tpp / 5)

      return teamData
    }

    // Gather data for both teams
    const allTeamData = (teams) => {
      const allData = {
        teamOne: gatherTeamData({ team: teams.teamOne }),
        teamTwo: gatherTeamData({ team: teams.teamTwo }),
      }
      setTeamsData(allData)
    }

    // Update state
    allTeamData(teams)
  }, [])

  return (
    <div className='comparison-display'>
      <ComparedPlayer teams={teams} currentTeam={"teamOne"} />
      <div className='infographs'>
        <TeamsTotals teamsData={teamsData} />
        <RecentNews teams={teams} />
      </div>
      <ComparedPlayer teams={teams} currentTeam={"teamTwo"} />
    </div>
  )
}
export default Comparison
