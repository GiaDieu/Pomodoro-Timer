import React from "react";
import BreakTimer from "./BreakTimer";
import SessionTimer from "./SessionTimer";
import Session from "./Session";
import { connect } from "react-redux";
import "../css/style.css";

class App extends React.Component {
  render() {
    return (
      <div
        className="container"
        style={{
          background: this.props.isRunning ? "#1abc9c" : "#008080"
        }}
      >
        <h1>Promodoro Clock</h1>
        <Session />
        <div className="interval">
          <BreakTimer />
          <SessionTimer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRunning: state.Timer.isRunning
  };
};

export default connect(mapStateToProps)(App);
