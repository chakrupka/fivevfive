# Comparing Five
Comparing Five ([fivevfive.com](https://fivevfive.com)) is a site that allows users to search and select players currently in the NBA to form and compare two [starting fives](https://en.wikipedia.org/wiki/Starting_lineup#Basketball:~:text=hitter%20(EH).-,Basketball,-%5Bedit%5D). Team-based comparisons allow anaylsis of:
- Offensive Rating
- Total Assists & Rebounds
- Shooting % (FG, 3FG, FT)

## Tech
### Frontend
The frontend is built with Vite + React and hosted on Netlify.

### Backend
The backend is built with Flask (Python), and utilizes the following APIs:
- [API-NBA](https://rapidapi.com/api-sports/api/api-nba) for player information and statistics.
- [Basketball Reference Scraper](https://github.com/vishaalagartha/basketball_reference_scraper/tree/master) for player headshots
- [NewsAPI](https://newsapi.org/) for gathering relevant player news.
  
It hosted through Docker on Google Cloud Run.
