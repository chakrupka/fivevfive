import { useEffect, useState } from "react"
import axios from "axios"

/**
 * Renders a component that displays recent news articles for selected players.
 *
 * @component
 * @param {Object} teams - Object containing both teams arrays.
 * @returns {JSX.Element} The rendered component.
 */
const RecentNews = ({ teams }) => {
  /* Initialize state hooks:
  news: news articles about players
  newsIndex: index of currently displayed article
   */
  const [news, setNews] = useState([])
  const [newsIndex, setNewsIndex] = useState(0)

  const url = "https://fivevfive-cdsnztik7q-uc.a.run.app"

  // Queries backend for recent news about each player
  useEffect(() => {
    // Get news about inputted player
    const getPlayerNews = async (player) => {
      // Get full name
      const playerName =
        player.playerInfo.firstname + " " + player.playerInfo.lastname

      // Try fetching news
      try {
        const article = await axios.get(
          `${url}/api/players/news/${encodeURIComponent(playerName)}`
        )

        // if news, update news state
        if (article.data.articles.length > 0) {
          setNews((currentNews) => {
            const newNews = {
              key: playerName,
              playerNews: article.data.articles[0],
            }
            const updatedNews = currentNews.concat(newNews)
            return updatedNews
          })
        }
      } catch {
        return console.error("No news")
      }
    }

    // Get news for each player for both teams
    teams.teamOne.map((player) => {
      getPlayerNews(player)
    })
    teams.teamTwo.map((player) => {
      getPlayerNews(player)
    })
  }, [])

  // Display next article in news array
  const nextArticle = () => {
    if (newsIndex + 1 >= news.length) {
      setNewsIndex(0)
    } else {
      setNewsIndex(newsIndex + 1)
    }
  }

  // Display previous article in news array
  const prevArticle = () => {
    if (newsIndex - 1 < 0) {
      setNewsIndex(news.length - 1)
    } else {
      setNewsIndex(newsIndex - 1)
    }
  }

  // Render news once articles have been fetched
  if (news.length > 0) {
    return (
      <div className='news'>
        <p>In the news: {news[newsIndex].key}</p>
        <a href={news[newsIndex].playerNews.url}>
          {news[newsIndex].playerNews.title}
        </a>
        {news.length > 1 && (
          <div className='button-container'>
            <button onClick={prevArticle} className='standard-button-news'>
              Prev
            </button>
            <button onClick={nextArticle} className='standard-button-news'>
              Next
            </button>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className='News'>
        <p>Loading news...</p>
      </div>
    )
  }
}
export default RecentNews
