//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [griffindorCount, setgriffindorCount] = useState(0);
  const [hufflepuffCount, setHufflepuffCount] = useState(0);

 


  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the griffindor score and another for the hufflepuff score.

  return (
    <div className="container">
      <section className="scoreboard">
      <h1 className="hogwartsQudditch"> Hogwarts  Qudditch </h1>
        <div className="topRow">
          <div className="griffindor">
            <h2 className="griffindor__name"> Griffindor </h2>  
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}  
            <div className="griffindor__score"> {griffindorCount} </div>  
          </div>  
          <div className="timer"> 07: 31 </div>  
          <div className="hufflepuff">
            <h2 className="hufflepuff__name"> Hufflepuff </h2>  
            <div className="hufflepuff__score"> {hufflepuffCount} </div>  
          </div>  
        </div>  
        <BottomRow />
      </section>  
      <section className="buttons">
        <div className="griffindorButtons">
            
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}  
          <button
            className="griffindorButtons__touchdown"
            onClick={() => setgriffindorCount(griffindorCount + 10)}> griffindor Goal </button>  
          <button
            className="griffindorButtons__fieldGoal"
            onClick={() => setgriffindorCount(griffindorCount + 150)}> griffindor Snitch </button>  
        </div>  
        <div className="hufflepuffButtons">
          <button
            className="hufflepuffButtons__touchdown"
            onClick={() => setHufflepuffCount(hufflepuffCount + 10)}> Hufflepuff Goal </button>  
          <button
            className="hufflepuffButtons__fieldGoal"
            onClick={() => setHufflepuffCount(hufflepuffCount + 150)}> Hufflepuff Snitch </button>  
        </div>  
      </section>  
    </div>
  );
}

export default App;
