import SearchPlayer from "./SearchPlayer"

/**
 * Renders a team component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.teams - The array of teams.
 * @param {Function} props.setTeams - The function to update the teams.
 * @param {string} props.currentTeam - The current team.
 * @returns {JSX.Element} The rendered team component.
 */
const Team = ({ teams, setTeams, currentTeam }) => {
  return (
    <>
      {teams[currentTeam].map((player, index) => (
        <SearchPlayer
          key={`team-${currentTeam === "teamOne" ? 1 : 2}-player-${index}`}
          playerData={player}
          setTeams={setTeams}
          playerIndex={index}
          teams={teams}
          currentTeam={currentTeam}
        />
      ))}
    </>
  )
}

export default Team
