import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Saves</h3>
        <div className="down__value">13</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Fouls</h3>
        <div className="toGo__value">2</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Fouls</h3>
        <div className="ballOn__value">0</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Saves</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
  );
};

export default BottomRow;
