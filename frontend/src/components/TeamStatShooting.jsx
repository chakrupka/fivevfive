/**
 * Renders a component to display shooting statistics for two teams.
 *
 * @param {Object} props - The component props.
 * @param {string} props.statTitle - The title of the shooting statistic.
 * @param {number} props.teamOneStat - The shooting statistic for team one.
 * @param {number} props.teamTwoStat - The shooting statistic for team two.
 * @returns {JSX.Element} The rendered TeamStatShooting component.
 */
const TeamStatShooting = ({ statTitle, teamOneStat, teamTwoStat }) => {
  return (
    <>
      <div className='stat-title'>
        <p>{statTitle} %</p>
      </div>
      <div className='team-totals'>
        {teamOneStat > teamTwoStat ? (
          <>
            <p className='team-stat more'>{teamOneStat}%</p>
            <p className='team-stat'>{teamTwoStat}%</p>
          </>
        ) : (
          <>
            <p className='team-stat'>{teamOneStat}%</p>
            <p className='team-stat more'>{teamTwoStat}%</p>
          </>
        )}
      </div>
    </>
  )
}

export default TeamStatShooting
