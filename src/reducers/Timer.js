import { InitialState } from "../actions/InitialObject";

const Timer = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT_ACTION_BREAK":
      return state.breakLength === 60
        ? { ...state }
        : {
            ...state,
            breakLength: state.breakLength + 1
          };

    case "DECREMENT_ACTION_BREAK":
      return state.breakLength === 1
        ? { ...state }
        : {
            ...state,
            breakLength: state.breakLength - 1
          };

    case "INCREMENT_ACTION_SESSION":
      return state.sessionLength === 60
        ? { ...state }
        : {
            ...state,
            sessionLength: state.sessionLength + 1,
            timerMinute: state.timerMinute + 1
          };

    case "DECREMENT_ACTION_SESSION":
      return state.sessionLength === 1
        ? { ...state }
        : {
            ...state,
            sessionLength: state.sessionLength - 1,
            timerMinute: state.timerMinute - 1
          };

    case "ACTION_PLAY":
      switch (state.timerSecond) {
        case 0:
          if (state.timerMinute === 0) {
            if (state.isSession) {
              return {
                ...state,
                isSession: false,
                timerMinute: state.breakLength
              };
            }
            return {
              ...state,
              isSession: true,
              timerMinute: state.sessionLength
            };
          }
          return {
            ...state,
            timerSecond: 59,
            timerMinute: state.timerMinute - 1
          };
        default:
          return { ...state, timerSecond: state.timerSecond - 1 };
      }

    case "ACTION_PAUSE":
      if (action.intervalId) {
        return {
          ...state,
          intervalId: action.intervalId
        };
      } else {
        alert("Please Start Your Action");
        return { ...state, intervalId: null };
      }
    case "ACTION_RESET":
      return {
        ...state,
        timerMinute: state.sessionLength,
        timerSecond: 0
      };

    case "ACTION_DISABLED":
      return {
        ...state,
        isRunning: action.isRunning
      };
    default:
      return state;
  }
};

export default Timer;
