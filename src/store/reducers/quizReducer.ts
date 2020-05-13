import * as actionTypes from "../actions/actionTypes";
import { AnyAction } from "redux";

export interface QuestionData { questionId: any; answer: string }

export interface ResultData {  [key: string]: string }

export interface State {
  answersData: ResultData;
  currentQuestion: number;
}

const initialState: State = {
  answersData: {},
  currentQuestion: -1,
};

const reducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_ANSWER:
      return {
        ...state,
        answersData: {
          ...state.answersData,
          [action.questionId]: action.answer,
        },
      };
    case actionTypes.DELETE_ANSWER:
      const { [action.payload]: value, ...withoutDeletedAnswer } = {
        ...state.answersData,
      };
      return {
        ...state,
        answersData: {
          ...withoutDeletedAnswer,
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
        currentQuestion: -1,
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
