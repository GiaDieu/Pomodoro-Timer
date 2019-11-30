import SessionLength from "../components/SessionLength";
import { connect } from "react-redux";
import { toggleIncrementSession, toggleDecrementSession } from "../actions";

const mapStateToProps = state => {
  const { sessionLength, isRunning } = state.Timer;
  return {
    isRunning,
    SessionTimer: sessionLength,
    toggleIncrementSession,
    toggleDecrementSession
  };
};
export default connect(mapStateToProps, {
  toggleIncrementSession,
  toggleDecrementSession
})(SessionLength);
