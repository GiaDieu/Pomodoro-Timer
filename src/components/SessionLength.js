import React from "react";

const SessionLength = props => {
  return (
    <div>
      <h3>Session Mode</h3>
      <div className="interval-container">
        <button
          disabled={props.isRunning === true ? "disabled" : ""}
          onClick={() => props.toggleDecrementSession()}
        >
          <i className="arrow down icon"></i>
        </button>
        <p className="interval-timer">{props.SessionTimer}</p>
        <button
          disabled={props.isRunning === true ? "disabled" : ""}
          onClick={() => props.toggleIncrementSession()}
        >
          <i className="arrow up icon"></i>
        </button>
      </div>
    </div>
  );
};

export default SessionLength;
