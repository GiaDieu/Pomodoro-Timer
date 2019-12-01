import Duration from "../components/Duration";
import { connect } from "react-redux";
import {
  ActionPlay,
  ActionPause,
  ActionReset,
  disabledAction
} from "../actions";
const mapStateToProps = state => {
  const {
    isSession,
    timerMinute,
    timerSecond,
    intervalId,
    isRunning
  } = state.Timer;
  return {
    isRunning,
    isSession,
    timerMinute,
    timerSecond,
    intervalId
  };
};
export default connect(mapStateToProps, {
  ActionPlay,
  ActionPause,
  ActionReset,
  disabledAction
})(Duration);
