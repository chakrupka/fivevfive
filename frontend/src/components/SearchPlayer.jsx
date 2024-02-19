import "../index.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import SearchResults from "./SearchResults"
import PlayerSearchForm from "./PlayerSearchForm"
import SearchedPlayer from "./SearchedPlayer"

/**
 * SearchPlayer component for searching and selecting a player.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.playerData - The data of the selected player.
 * @param {Function} props.setTeams - The function to update the teams.
 * @param {number} props.playerIndex - The index of the player in the team.
 * @param {string} props.currentTeam - The current team.
 * @returns {JSX.Element} The rendered SearchPlayer component.
 */
const SearchPlayer = ({ playerData, setTeams, playerIndex, currentTeam }) => {
  /* Initialize state hooks:
  query: current query to be searched
  results: Array of returned results from a search
  selectedPlayer: data of selected player from results
  search: most recent search
   */
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(playerData)
  const [search, setSearch] = useState("")

  const url = "https://fivevfive-cdsnztik7q-uc.a.run.app"

  // Fetches player data (stats and headshot) from backened once a player has been selected from results
  useEffect(() => {
    // Try and get player data
    const fetchPlayerData = async () => {
      // Make sure a player is selected, then try and fetch data
      if (selectedPlayer && !selectedPlayer.playerStats) {
        try {
          const playerDataResponse = await axios.get(
            `${url}/api/players/stats/${encodeURIComponent(
              selectedPlayer.playerInfo.id
            )}/2023`
          )
          const playerStats = calculateSeasonAverages(playerDataResponse.data)

          const headshotResponse = await axios.get(
            `${url}/api/headshot/${encodeURIComponent(
              selectedPlayer.playerInfo.firstname +
                " " +
                selectedPlayer.playerInfo.lastname
            )}`
          )

          const headshotURL = headshotResponse.data

          // Add player into teams
          const newPlayer = {
            playerInfo: { ...selectedPlayer.playerInfo },
            playerStats: { ...playerStats },
            playerHeadshot: headshotURL,
          }

          setTeams((currentTeams) => {
            const updatedTeams = { ...currentTeams }
            const updatedTeamArray = [...updatedTeams[currentTeam]]

            updatedTeamArray[playerIndex] = newPlayer
            updatedTeams[currentTeam] = updatedTeamArray

            return updatedTeams
          })
          setSelectedPlayer(newPlayer)
        } catch (error) {
          console.error("Error fetching player stats:", error)
        }
      }
    }

    fetchPlayerData()
  }, [selectedPlayer])

  // Fetch matching player results from search
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (search) {
        try {
          const searchResponse = await axios.get(
            `${url}/api/players/${encodeURIComponent(search)}`
          )
          if (searchResponse.data.results === 0) alert("No players found")
          else setResults(searchResponse.data.response)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
        setSearch("")
      }
    }

    fetchSearchResults()
  }, [search])

  // Handle search
  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(query)
    setQuery("")
  }

  // Function to calculate season averages as data is returned in totals
  // Parses player stats and divides totals by games played
  function calculateSeasonAverages(data) {
    let totalAssists = 0,
      totalRebounds = 0,
      totalPoints = 0
    let totalFgp = 0,
      totalFtp = 0,
      totalTpp = 0

    data.response.forEach((game) => {
      totalAssists += game.assists
      totalRebounds += game.defReb + game.offReb
      totalPoints += game.points
      totalFgp += parseFloat(game.fgp)
      totalFtp += parseFloat(game.ftp)
      totalTpp += parseFloat(game.tpp)
    })

    const gamesCount = data.response.length
    return {
      AST: Math.round(totalAssists / gamesCount),
      REB: Math.round(totalRebounds / gamesCount),
      PTS: Math.round(totalPoints / gamesCount),
      FG_PCT: Math.round(totalFgp / gamesCount),
      FT_PCT: Math.round(totalFtp / gamesCount),
      FG3_PCT: Math.round(totalTpp / gamesCount),
    }
  }

  // Allows for changing of current selected player, and updates teams accordingly
  const changePlayer = () => {
    setResults([])

    setTeams((currentTeams) => {
      const updatedTeams = { ...currentTeams }
      const updatedTeamArray = [...updatedTeams[currentTeam]]

      updatedTeamArray[playerIndex] = null
      updatedTeams[currentTeam] = updatedTeamArray

      return updatedTeams
    })
    setSelectedPlayer(null)
  }

  // If player has been selected, displays player data, otherwise displays search bar or loading messages
  if (selectedPlayer) {
    return (
      <SearchedPlayer
        selectedPlayer={selectedPlayer}
        changePlayer={changePlayer}
      />
    )
  } else {
    return (
      <div className='player'>
        <PlayerSearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
        {search && <p>Loading players...</p>}
        {results.length > 0 && (
          <SearchResults
            results={results}
            setSelectedPlayer={setSelectedPlayer}
          />
        )}
      </div>
    )
  }
}

export default SearchPlayer
