import React from "react";

class Duration extends React.Component {
  state = {
    intervalId: 0
  }; // create state to store the IntervalID for setInterval every second
  // pass action creator in function tick() to run the time
  tick() {
    let intervalId = setInterval(this.props.ActionPlay, 1000);
    this.props.disabledAction(true);
    this.setState({ intervalId: intervalId });
  }

  // pass action creator in function stop() to pause the time
  stop() {
    this.props.ActionPause(this.state.intervalId); // pass state.intervalId as arguements to reducer store(intervalId Store reducer)
    clearInterval(this.state.intervalId);
    this.props.disabledAction(false);
  }

  //pass action creator in function reset() to reset back to sessionLength, timerSecond in reduce store
  reset() {
    this.stop();
    this.props.ActionReset();
    this.props.disabledAction(false);
  }

  render() {
    return (
      <div>
        <div
          className="working-time"
          style={{ background: this.props.isSession ? "#1abc9c" : "#e67e22" }}
        >
          <h3>{this.props.isSession ? "Coding Time" : "Break Time"}</h3>
          <span className="timer">{this.props.timerMinute}</span>
          <span className="timer">:</span>
          <span className="timer">
            {this.props.timerSecond < 10
              ? `0${this.props.timerSecond}`
              : this.props.timerSecond}
          </span>
        </div>
        <div className="Pomo-action">
          <button
            disabled={this.props.isRunning === true ? "disabled" : ""}
            onClick={() => this.tick()}
          >
            <i className="play icon"></i>
          </button>
          <button onClick={() => this.stop()}>
            <i className="pause icon"></i>
          </button>
          <button onClick={() => this.reset()}>
            <i className="undo icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Duration;
