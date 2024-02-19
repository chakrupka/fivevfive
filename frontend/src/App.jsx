import { useState, useEffect } from "react"
import Team from "./components/Team"
import Comparison from "./components/Comparison"
import fillTeams from "./services/fillTeams"

// Main Website App
const App = () => {
  /* Intialize state hooks:
  teams: Array that holds each starting five
  currentTeam: selected team
  animationClass: sets whether team slides outward or inward
  showResults: sets whether results page can be displayed (depends on whether both teams have 5 players each)
  isMobile: sets if user is on a mobile device
  warningDismissed: sets whether mobile warning has been dismissed
  */
  const [teams, setTeams] = useState({
    teamOne: Array(5).fill(null),
    teamTwo: Array(5).fill(null),
  })
  const [currentTeam, setCurrentTeam] = useState("teamOne")
  const [animationClass, setAnimationClass] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [warningDismissed, setWarningDismissed] = useState(false)

  // Scroll results into view after Submit button is pressed
  useEffect(() => {
    if (showResults) {
      const element = document.getElementById("comparison-display")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [showResults])

  // Client detection to flag if user is on mobile
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const mobile = Boolean(userAgent.match(/android|iphone|ipad/))
    setIsMobile(mobile)
  }, [])

  // Animation handling: Depending on which team is currently in view, moves inward/outward left or right
  // Timeouts to smooth element transtions
  const handleNextTeam = () => {
    if (currentTeam === "teamOne") {
      setAnimationClass("slide-out-left")

      setTimeout(() => {
        setAnimationClass("slide-in-right")

        setTimeout(() => {
          setAnimationClass("")
        }, 500)
      }, 500)
    } else {
      setAnimationClass("slide-in-left")

      setTimeout(() => {
        setAnimationClass("slide-out-right")

        setTimeout(() => {
          setAnimationClass("")
        }, 500)
      }, 500)
    }

    setTimeout(() => {
      setCurrentTeam(currentTeam === "teamOne" ? "teamTwo" : "teamOne")
    }, 500)
  }

  // Move view to player selection
  const scrollToPlayerSelection = () => {
    document
      .getElementById("player-selection")
      .scrollIntoView({ behavior: "smooth" })
  }

  // Show results page (after Submit)
  const triggerShowResults = () => {
    setShowResults(true)
  }

  // Dismiss warning
  const dismissWarning = () => {
    setWarningDismissed(true)
  }

  // Autofill teams with pre-selected team
  const autofill = () => {
    fillTeams(setTeams, setCurrentTeam)
  }

  // Main content
  return (
    <div>
      {isMobile && !warningDismissed && (
        <div className='mobileWarning'>
          <p>This website is best viewed on a desktop.</p>
          <button onClick={dismissWarning} className='standard-button'>
            Dismiss
          </button>
        </div>
      )}
      <div className='title-background'>
        <div className='title-content'>
          <b className='title'>Comparing Five</b>
          <p className='subtext'>Select and compare NBA starting fives</p>
          <p id='titlelinktext'>
            Created by{" "}
            <a href='https://www.linkedin.com/in/cha-krupka' id='titlelink'>
              Cha Krupka
            </a>
          </p>
          <button
            className='entry-button'
            onClick={() => scrollToPlayerSelection()}
          >
            ↓
          </button>
        </div>
      </div>
      <div className='select-team-display' id='player-selection'>
        <p className='bigtext'>
          Select {currentTeam === "teamOne" ? "First" : "Second"} Team
        </p>
        <div className={`team-display ${animationClass}`}>
          {console.log("rerendered")}
          <Team
            key={currentTeam}
            currentTeam={currentTeam}
            teams={teams}
            setTeams={setTeams}
          />
        </div>
        <div className='button-container'>
          <button className='standard-button' onClick={handleNextTeam}>
            {currentTeam === "teamOne" ? "Next Team →" : "← Previous Team"}
          </button>
        </div>
        <div className='button-container'>
          <button className='standard-button submit-teams' onClick={autofill}>
            Autofill
          </button>
          {!teams.teamOne.some((player) => !player) &&
            !teams.teamTwo.some((player) => !player) && (
              <button
                className='standard-button submit-teams'
                onClick={triggerShowResults}
              >
                Submit
              </button>
            )}
        </div>
      </div>
      {showResults &&
        !teams.teamOne.some((player) => !player) &&
        !teams.teamTwo.some((player) => !player) && (
          <div id='comparison-display'>
            <Comparison teams={teams}></Comparison>
          </div>
        )}
    </div>
  )
}
export default App
