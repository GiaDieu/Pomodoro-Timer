import Duration from "../components/Duration";
import { connect } from "react-redux";
import {
  ActionPlay,
  ActionPause,
  ActionReset,
  disabledAction
} from "../actions";
const mapStateToProps = state => {
  const { isSession, timerMinute, timerSecond, intervalId } = state.Timer;
  return {
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
