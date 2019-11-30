import BreakLength from "../components/BreakLength";
import { connect } from "react-redux";
import { toggleIncrementBreak, toggleDecrementBreak } from "../actions";

const mapStateToProps = state => {
  const { breakLength, isRunning } = state.Timer;
  return {
    isRunning,
    BreakTimer: breakLength,
    toggleIncrementBreak,
    toggleDecrementBreak
  };
};
export default connect(mapStateToProps, {
  toggleIncrementBreak,
  toggleDecrementBreak
})(BreakLength);
