/**
 * Fills the teams with player information.
 *
 * @param {Function} setTeams - The function to set the teams.
 * @param {Function} setCurrentTeam - The function to set the current team.
 */
const fillTeams = (setTeams, setCurrentTeam) => {
  // Intialize preset team
  const tempTeam = {
    teamOne: [
      {
        playerInfo: {
          affiliation: "St. Vincent-St. Mary HS (OH)/USA",
          birth: {
            country: "USA",
            date: "1984-12-30",
          },
          college: "St. Vincent-St. Mary HS (OH)",
          firstname: "LeBron",
          height: {
            feets: "6",
            inches: "9",
            meters: "2.06",
          },
          id: 265,
          lastname: "James",
          leagues: {
            standard: {
              active: true,
              jersey: 6,
              pos: "F",
            },
          },
          nba: {
            pro: 18,
            start: 2003,
          },
          weight: {
            kilograms: "113.4",
            pounds: "250",
          },
        },
        playerStats: {
          AST: 7,
          REB: 7,
          PTS: 24,
          FG_PCT: 52,
          FT_PCT: 72,
          FG3_PCT: 40,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
      },
      {
        playerInfo: {
          affiliation: "Davidson/USA",
          birth: {
            country: "USA",
            date: "1988-03-14",
          },
          college: "Davidson",
          firstname: "Stephen",
          height: {
            feets: "6",
            inches: "2",
            meters: "1.88",
          },
          id: 124,
          lastname: "Curry",
          leagues: {
            standard: {
              active: true,
              jersey: 30,
              pos: "G",
            },
          },
          nba: {
            pro: 12,
            start: 2009,
          },
          weight: {
            kilograms: "83.9",
            pounds: "185",
          },
        },
        playerStats: {
          AST: 5,
          REB: 4,
          PTS: 27,
          FG_PCT: 46,
          FT_PCT: 90,
          FG3_PCT: 42,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
      },
      {
        playerInfo: {
          affiliation: "Duke/USA",
          birth: {
            country: "USA",
            date: "1998-03-03",
          },
          college: "Duke",
          firstname: "Jayson",
          height: {
            feets: "6",
            inches: "8",
            meters: "2.03",
          },
          id: 882,
          lastname: "Tatum",
          leagues: {
            standard: {
              active: true,
              jersey: null,
              pos: "F-G",
            },
          },
          nba: {
            pro: 4,
            start: 2017,
          },
          weight: {
            kilograms: "95.3",
            pounds: "210",
          },
        },
        playerStats: {
          AST: 5,
          REB: 9,
          PTS: 27,
          FG_PCT: 47,
          FT_PCT: 80,
          FG3_PCT: 36,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/tatumja01.jpg",
      },
      {
        playerInfo: {
          affiliation: "Real Madrid/Slovenia",
          birth: {
            country: "Slovenia",
            date: "1999-02-28",
          },
          college: "Real Madrid",
          firstname: "Luka",
          height: {
            feets: "6",
            inches: "7",
            meters: "2.01",
          },
          id: 963,
          lastname: "Doncic",
          leagues: {
            standard: {
              active: true,
              jersey: 77,
              pos: "F-G",
            },
            vegas: {
              active: true,
              jersey: 77,
              pos: "G-F",
            },
          },
          nba: {
            pro: 3,
            start: 2018,
          },
          weight: {
            kilograms: "104.3",
            pounds: "230",
          },
        },
        playerStats: {
          AST: 9,
          REB: 9,
          PTS: 34,
          FG_PCT: 49,
          FT_PCT: 78,
          FG3_PCT: 37,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/doncilu01.jpg",
      },
      {
        playerInfo: {
          affiliation: "Mega Basket/Serbia",
          birth: {
            country: "Serbia",
            date: "1995-02-19",
          },
          college: "Mega Basket",
          firstname: "Nikola",
          height: {
            feets: "6",
            inches: "11",
            meters: "2.11",
          },
          id: 279,
          lastname: "Jokic",
          leagues: {
            standard: {
              active: true,
              jersey: 15,
              pos: "C",
            },
          },
          nba: {
            pro: 6,
            start: 2015,
          },
          weight: {
            kilograms: "128.8",
            pounds: "284",
          },
        },
        playerStats: {
          AST: 9,
          REB: 12,
          PTS: 25,
          FG_PCT: 60,
          FT_PCT: 74,
          FG3_PCT: 37,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
      },
    ],
    teamTwo: [
      {
        playerInfo: {
          affiliation: "Kansas/Cameroon",
          birth: {
            country: "Cameroon",
            date: "1994-03-16",
          },
          college: "Kansas",
          firstname: "Joel",
          height: {
            feets: "7",
            inches: "0",
            meters: "2.13",
          },
          id: 159,
          lastname: "Embiid",
          leagues: {
            africa: {
              active: true,
              jersey: 21,
              pos: "C",
            },
            standard: {
              active: true,
              jersey: 21,
              pos: "C-F",
            },
          },
          nba: {
            pro: 5,
            start: 2016,
          },
          weight: {
            kilograms: "127.0",
            pounds: "280",
          },
        },
        playerStats: {
          AST: 6,
          REB: 11,
          PTS: 35,
          FG_PCT: 52,
          FT_PCT: 89,
          FG3_PCT: 36,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/embiijo01.jpg",
      },
      {
        playerInfo: {
          affiliation: "California/USA",
          birth: {
            country: "USA",
            date: "1996-10-24",
          },
          college: "California",
          firstname: "Jaylen",
          height: {
            feets: "6",
            inches: "6",
            meters: "1.98",
          },
          id: 75,
          lastname: "Brown",
          leagues: {
            standard: {
              active: true,
              jersey: 7,
              pos: "G-F",
            },
          },
          nba: {
            pro: 5,
            start: 2016,
          },
          weight: {
            kilograms: "101.2",
            pounds: "223",
          },
        },
        playerStats: {
          AST: 4,
          REB: 5,
          PTS: 22,
          FG_PCT: 50,
          FT_PCT: 61,
          FG3_PCT: 32,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/brownja02.jpg",
      },
      {
        playerInfo: {
          affiliation: "Kentucky/Canada",
          birth: {
            country: "Canada",
            date: "1998-07-12",
          },
          college: "Kentucky",
          firstname: "Shai",
          height: {
            feets: "6",
            inches: "6",
            meters: "1.98",
          },
          id: 972,
          lastname: "Gilgeous-Alexander",
          leagues: {
            standard: {
              active: true,
              jersey: 2,
              pos: "G",
            },
            vegas: {
              active: true,
              jersey: 2,
              pos: "G",
            },
          },
          nba: {
            pro: 3,
            start: 2018,
          },
          weight: {
            kilograms: "81.6",
            pounds: "180",
          },
        },
        playerStats: {
          AST: 6,
          REB: 5,
          PTS: 30,
          FG_PCT: 55,
          FT_PCT: 87,
          FG3_PCT: 41,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/gilgesh01.jpg",
      },
      {
        playerInfo: {
          affiliation: "Cholet/France",
          birth: {
            country: "France",
            date: "1992-06-26",
          },
          college: "Cholet",
          firstname: "Rudy",
          height: {
            feets: "7",
            inches: "1",
            meters: "2.16",
          },
          id: 192,
          lastname: "Gobert",
          leagues: {
            standard: {
              active: true,
              jersey: 27,
              pos: "C",
            },
          },
          nba: {
            pro: 8,
            start: 2013,
          },
          weight: {
            kilograms: "117.0",
            pounds: "258",
          },
        },
        playerStats: {
          AST: 1,
          REB: 12,
          PTS: 13,
          FG_PCT: 66,
          FT_PCT: 62,
          FG3_PCT: 0,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/goberru01.jpg",
      },
      {
        playerInfo: {
          affiliation: "Gonzaga/Lithuania",
          birth: {
            country: "Lithuania",
            date: "1996-05-03",
          },
          college: "Gonzaga",
          firstname: "Domantas",
          height: {
            feets: "6",
            inches: "11",
            meters: "2.11",
          },
          id: 463,
          lastname: "Sabonis",
          leagues: {
            standard: {
              active: true,
              jersey: 10,
              pos: "F-C",
            },
          },
          nba: {
            pro: 5,
            start: 2016,
          },
          weight: {
            kilograms: "108.9",
            pounds: "240",
          },
        },
        playerStats: {
          AST: 8,
          REB: 13,
          PTS: 20,
          FG_PCT: 61,
          FT_PCT: 63,
          FG3_PCT: 33,
        },
        playerHeadshot:
          "https://www.basketball-reference.com/req/202106291/images/headshots/sabondo01.jpg",
      },
    ],
  }

  // Set teams, update visuals
  setTeams(tempTeam)
  setCurrentTeam("teamTwo")
}

export default fillTeams
