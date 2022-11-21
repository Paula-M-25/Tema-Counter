import React from "react";
import "./App.css";
import AutoCounter from "./counter-components/AutoCounter/AutoCounter";
import ManualCounter from "./counter-components/ManualCounter/ManualCounter";

function App() {
  return (
    <div className="App">
      <AutoCounter />
      <ManualCounter />
    </div>
  );
}

export default App;
