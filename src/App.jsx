import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Heat Nation</h1>
      <p> Stay up to date with the latest game schedule</p>
      <Card
        opponent="Sacramento Kings"
        date="2/26"
        stadium="Golden 1 Center"
        info="https://www.espn.com/nba/game/_/gameId/401585459/heat-kings"
      />
      <Card
        opponent="Portland Trail Blazers"
        date="2/27"
        stadium="Moda Center"
        info="https://www.espn.com/nba/game/_/gameId/401585470/heat-trail-blazers"
      />
      <Card
        opponent="Denver Nuggets"
        date="2/29"
        stadium="Ball Arena"
        info="https://www.espn.com/nba/team/_/name/den/denver-nuggets"
      />
    </>
  );
}

export default App;
