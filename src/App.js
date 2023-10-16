import React, {useState} from "react";
import './App.css';
import {Board} from "./components/Board"



function App() {

  const [board, setBoard] = useState(Array(9).fill(null));

  const handBoxClick = (box)


  return (
    <div className="App">
      <Board board={board} onClick={null} /> 

    </div>
  );
}

export default App;
