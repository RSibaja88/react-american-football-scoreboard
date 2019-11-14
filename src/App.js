//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [griffyndorCount, setGriffyndorCount] = useState(0);
  const [hufflepuffCount, setHufflepuffCount] = useState(0);

 


  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the griffyndor score and another for the hufflepuff score.

  return (
    <div className="container">
      <section className="scoreboard">
      <h1 className="hogwartsQudditch"> Hogwarts  Qudditch </h1>
        <div className="topRow">
          <div className="griffyndor">
            <h2 className="griffyndor__name"> Griffyndor </h2>  
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}  
            <div className="griffyndor__score"> {griffyndorCount} </div>  
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
        <div className="griffyndorButtons">
            
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}  
          <button
            className="griffyndorButtons__touchdown"
            onClick={() => setGriffyndorCount(griffyndorCount + 10)}> Griffyndor Goal </button>  
          <button
            className="griffyndorButtons__fieldGoal"
            onClick={() => setGriffyndorCount(griffyndorCount + 150)}> Griffyndor Snitch </button>  
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
