export const toggleIncrementBreak = () => {
  return {
    type: "INCREMENT_ACTION_BREAK"
  };
};

export const toggleDecrementBreak = () => {
  return {
    type: "DECREMENT_ACTION_BREAK"
  };
};

export const toggleIncrementSession = () => {
  return {
    type: "INCREMENT_ACTION_SESSION"
  };
};

export const toggleDecrementSession = () => {
  return {
    type: "DECREMENT_ACTION_SESSION"
  };
};

export const ActionPlay = () => {
  return {
    type: "ACTION_PLAY"
  };
};

export const ActionPause = intervalId => {
  return {
    type: "ACTION_PAUSE",
    intervalId
  };
};

export const ActionReset = () => {
  return {
    type: "ACTION_RESET"
  };
};

export const disabledAction = isRunning => {
  return {
    type: "ACTION_DISABLED",
    isRunning
  };
};
