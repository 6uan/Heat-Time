import "./App.css";
import teamLogos from "./teamLogos";
import Card from "./components/Card";

function App() {
  const homeTeam = "mia";

  return (
    <>
      <h1>Heat Nation</h1>
      <p> Stay up to date with the latest game schedule</p>
      <div className="card-wrapper">
        <Card
          opponent="Sacramento Kings"
          date="2/26"
          time="10:00 PM"
          stadium="Golden 1 Center"
          info="https://www.espn.com/nba/game/_/gameId/401585459/heat-kings"
          home={teamLogos[homeTeam]}
          away={teamLogos["sac"]}
        />
        <Card
          opponent="Portland Trail Blazers"
          date="2/27"
          time="10:00 PM"
          stadium="Moda Center"
          info="https://www.espn.com/nba/game/_/gameId/401585470/heat-trail-blazers"
          home={teamLogos[homeTeam]}
          away={teamLogos["por"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          time="10:00 PM"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Utah Jazz"
          date="3/2"
          time="5:00 PM"
          stadium="Kaseya Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["uta"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
        <Card
          opponent="Denver Nuggets"
          date="2/29"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
          home={teamLogos[homeTeam]}
          away={teamLogos["den"]}
        />
      </div>
    </>
  );
}

export default App;
