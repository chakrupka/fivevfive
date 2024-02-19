/**
 * Renders a component that displays team statistics.
 *
 * @param {Object} props - The component props.
 * @param {string} props.statTitle - The title of the stat.
 * @param {number} props.teamOneStat - The stat value for team one.
 * @param {number} props.teamTwoStat - The stat value for team two.
 * @returns {JSX.Element} The rendered TeamStat component.
 */
const TeamStat = ({ statTitle, teamOneStat, teamTwoStat }) => {
  return (
    <>
      <div className='stat-title'>
        <p>{statTitle}</p>
      </div>
      <div className='team-totals'>
        {teamOneStat > teamTwoStat ? (
          <>
            <p className='team-stat more'>{teamOneStat}</p>
            <p className='team-stat'>{teamTwoStat}</p>
          </>
        ) : (
          <>
            <p className='team-stat'>{teamOneStat}</p>
            <p className='team-stat more'>{teamTwoStat}</p>
          </>
        )}
      </div>
    </>
  )
}

export default TeamStat
