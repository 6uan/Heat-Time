import "./App.css";
import Card from "./components/Card";

const App = () => {
  const homeTeam = "mia";

  return (
    <>
      <h1>Heat Nation</h1>
      <p>Stay up to date with the latest game schedule</p>
      <div className="card-wrapper">
        <Card
          home={homeTeam}
          away={"sac"}
          date="2/26"
          time="10:00 PM"
          stadium="Golden 1 Center"
          info="https://www.espn.com/nba/game/_/gameId/401585459/heat-kings"
        />
        <Card
          home={homeTeam}
          away={"por"}
          date="2/27"
          time="10:00 PM"
          stadium="Moda Center"
          info="https://www.espn.com/nba/game/_/gameId/401585470/heat-trail-blazers"
        />
        <Card
          home={homeTeam}
          away={"den"}
          date="2/29"
          time="10:00 PM"
          stadium="Ball Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"uta"}
          date="3/2"
          time="5:00 PM"
          stadium="Kaseya Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"det"}
          date="3/5"
          time="7:30 PM"
          stadium="Kaseya Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"dal"}
          date="3/7"
          time="7:30 PM"
          stadium="American Airlines Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"okc"}
          date="3/8"
          time="8:00 PM"
          stadium="Paycom Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"was"}
          date="3/10"
          time="6:00 PM"
          stadium="Kaseya Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"den"}
          date="3/13"
          time="7:30 PM"
          stadium="Kaseya Center"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"det"}
          date="3/15"
          time="7:00 PM"
          stadium="Little Caesars Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"det"}
          date="3/17"
          time="3:00 PM"
          stadium="Little Caesars Arena"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
        <Card
          home={homeTeam}
          away={"phi"}
          date="3/18"
          stadium="Wells Fargo Center"
          time="7:30 PM"
          info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
        />
      </div>
    </>
  );
};

export default App;
