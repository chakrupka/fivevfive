import requests
from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
from basketball_reference_scraper.utils import get_player_suffix
from basketball_reference_scraper.lookup import lookup
from newsapi import NewsApiClient
from datetime import datetime, timedelta
from dotenv import load_dotenv
import os

# Set app variables (grab API keys from env, enable cross-origin resource sharing, set port)
load_dotenv("api.env")

app = Flask(__name__)
CORS(app)

port = int(os.environ.get("PORT", 8080))

NEWSAPI_KEY = os.getenv("NEWSAPI_KEY")
API_KEY = os.getenv("API_KEY")
API_HOST = os.getenv("API_HOST")


# Middleware for forcing https
def before_request():
    if request.headers.get("X-Forwarded-Proto", "http") == "http":
        url = request.url.replace("http://", "https://", 1)
        return redirect(url, code=301)


# Get current dates for searching past weeks news
def getPastWeek():
    today_date = datetime.now().strftime("%Y-%m-%d")
    week_ago_date = (datetime.now() - timedelta(7)).strftime("%Y-%m-%d")

    return (today_date, week_ago_date)


# Routing for News, search for most popular news article from the last week for any given player in JSON format
# Uses NewsAPI
@app.route("/api/players/news/<player_name>")
def get_player_news(player_name):
    newsapi = NewsApiClient(NEWSAPI_KEY)
    week_ago, this_week = getPastWeek()
    player_news = newsapi.get_everything(
        qintitle=player_name,
        sources="nba-canada, nba, bleacher-report, yahoo, espn, slam",
        from_param=week_ago,
        to=this_week,
        language="en",
        sort_by="popularity",
        page=1,
        page_size=1,
    )
    return jsonify(player_news)


# Routing for stats, given a player_id returns their current season stats in JSON format.
# Uses API-NBA
@app.route("/api/players/stats/<player_id>/<season>")
def get_player_stats(player_id, season):
    url = "https://api-nba-v1.p.rapidapi.com/players/statistics"
    querystring = {"id": player_id, "season": season}
    headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": API_HOST}

    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "API request failed"}), response.status_code


# Routing for searching players (by player last name). Returns list of player matches in JSON format.
# Uses API-NBA
@app.route("/api/players/<search_name>")
def get_players(search_name):
    url = "https://api-nba-v1.p.rapidapi.com/players"
    querystring = {"search": search_name}
    headers = {"X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": API_HOST}

    response = requests.get(url, headers=headers, params=querystring)

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "API request failed"}), response.status_code


# Routing for player headshots, given a player name
# Uses Basketball-Reference-Scraper API
@app.route("/api/headshot/<player_name>")
def get_suffix(player_name):
    searchedName = player_name
    # First try using Basketball-Reference-Scraper internal API to match a player with valid and correct suffix
    try:
        name = lookup(searchedName, False)
        suffix = get_player_suffix(name)
        jpg = suffix.split("/")[-1].replace("html", "jpg")
        first_url = (
            "https://www.basketball-reference.com/req/202106291/images/headshots/" + jpg
        )

        response = requests.head(first_url)
        if response.status_code == 200:
            return first_url

    except Exception as e:
        pass

    # If match failed, attempt to fetch using manually-created suffix
    try:
        firstname, lastname = searchedName.lower().replace("'", "").split(" ")
        jpg = lastname[:5] + firstname[:2] + "01" + ".jpg"
        second_url = (
            "https://www.basketball-reference.com/req/202106291/images/headshots/" + jpg
        )

        response = requests.head(second_url)
        if response.status_code == 200:
            return second_url

    except Exception as e:
        pass

    # If no image exists, use placeholder image
    return "https://i.ibb.co/JzGqfTY/bball-player-silhouette-tiny.png"


# Main app
if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0", port=port)
