import * as actionTypes from './actionTypes';

export const setAnswer = (payload) => {
    return {
        type: actionTypes.SET_ANSWER,
        ...payload
    }
}

export const nextQuestion = () => {
    return {
        type: actionTypes.NEXT_QUESTION
    }
}

export const prevQuestion = () => {
    return {
        type: actionTypes.PREV_QUESTION
    }
}

