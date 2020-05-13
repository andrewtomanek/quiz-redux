import * as actionTypes from "./actionTypes";

export const setAnswer = (payload) => {
  return {
    type: actionTypes.SET_ANSWER,
    ...payload,
  };
};
export const removeAnswer = (id) => {
  return {
    type: actionTypes.DELETE_ANSWER,
    payload:id,
  };
};

export const resetResults = () => {
  return {
    type: actionTypes.RESET_RESULTS,
  };
};

export const resetIndex = () => {
  return {
    type: actionTypes.RESET_INDEX,
  };
};

export const nextQuestion = () => {
  return {
    type: actionTypes.NEXT_QUESTION,
  };
};

export const prevQuestion = () => {
  return {
    type: actionTypes.PREV_QUESTION,
  };
};
