import React from "react";

const BreakSession = props => {
  return (
    <div>
      <h3>Break Mode</h3>
      <div className="interval-container">
        <button
          disabled={props.isRunning === true ? "disabled" : ""}
          onClick={() => props.toggleDecrementBreak()}
        >
          <i className="arrow down icon"></i>
        </button>
        <p className="interval-timer">{props.BreakTimer}</p>
        <button
          disabled={props.isRunning === true ? "disabled" : ""}
          onClick={() => props.toggleIncrementBreak()}
        >
          <i className="arrow up icon"></i>
        </button>
      </div>
    </div>
  );
};

export default BreakSession;
