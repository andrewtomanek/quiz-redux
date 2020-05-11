import * as actionTypes from '../actions/actionTypes'; 

export interface State {
    answersInfo:{};
    currentQuestion:number;
}

const initialState: State = {   
    answersInfo: {},
    currentQuestion: -1,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_ANSWER:
            return {
                ...state,
                answersInfo: {
                    ...state.answersInfo,
                    [action.questionId]:action.answer
                } 
            }
            case actionTypes.NEXT_QUESTION:
                return {
                    ...state,
                    currentQuestion: state.currentQuestion + 1
                }
            case actionTypes.PREV_QUESTION:
                return {
                    ...state,
                    currentQuestion: state.currentQuestion - 1
                }
        default: 
            return state;
    }
}

export default reducer;