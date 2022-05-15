import "./styles.css";
import Home from "./components/Home";
import Questions from "./components/Questions";
import React from "react";

export default function App() {
  const [deckType, setDeckType] = React.useState("React");
  const [zapsGoal, setZapsGoal] = React.useState("");

  return (
    <div className="App">
      <Home deckType={deckType} setDeckType={setDeckType} zapsGoal={zapsGoal} setZapsGoal={setZapsGoal}/>
      <Questions deckType={deckType} zapsGoal={zapsGoal}/>
    </div>
  );
}
