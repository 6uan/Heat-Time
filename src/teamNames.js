const teamNames = {
    atl: "Atlanta Hawks",
    bos: "Boston Celtics",
    bkn: "Brooklyn Nets",
    cha: "Charlotte Hornets",
    chi: "Chicago Bulls",
    cle: "Cleveland Cavaliers",
    dal: "Dallas Mavericks",
    den: "Denver Nuggets",
    det: "Detroit Pistons",
    gsw: "Golden State Warriors",
    hou: "Houston Rockets",
    ind: "Indiana Pacers",
    lac: "Los Angeles Clippers",
    lal: "Los Angeles Lakers",
    mem: "Memphis Grizzlies",
    mia: "Miami Heat",
    mil: "Milwaukee Bucks",
    min: "Minnesota Timberwolves",
    nop: "New Orleans Pelicans",
    nyk: "New York Knicks",
    okc: "Oklahoma City Thunder",
    orl: "Orlando Magic",
    phi: "Philadelphia 76ers",
    phx: "Phoenix Suns",
    por: "Portland Trail Blazers",
    sac: "Sacramento Kings",
    sas: "San Antonio Spurs",
    tor: "Toronto Raptors",
    uta: "Utah Jazz",
    was: "Washington Wizards",
  };
  
  function getFullTeamName(teamInitials) {
    const fullName = teamNames[teamInitials.toLowerCase()];
    if (fullName) {
      return fullName;
    } else {
      return "null";
    }
  }
  
  export default teamNames;
  