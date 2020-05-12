import * as actionTypes from "../actions/actionTypes";

export interface State {
  answersData: {};
  currentQuestion: number;
}

const initialState: State = {
  answersData: {},
  currentQuestion: -1,
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.SET_ANSWER:
      return {
        ...state,
        answersData: {
          ...state.answersData,
          [action.questionId]: action.answer,
        },
      };
    case actionTypes.RESET_RESULTS:
      return {
        ...state,
        answersData: {},
      };

    case actionTypes.RESET_INDEX:
      return {
        ...state,
        currentQuestion: - 1,
      };
          case actionTypes.NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case actionTypes.PREV_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      };
    default:
      return state;
  }
};

export default reducer;
