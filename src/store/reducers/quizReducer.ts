import * as actionTypes from '../actions/actionTypes'; 

export interface State {
    answersInfo:{};
    selectedQuestion:number;
}

const initialState: State = {   
    answersInfo: {},
    selectedQuestion: -1,
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
                console.log(state.selectedQuestion)
                return {
                    ...state,
                    selectedQuestion: state.selectedQuestion + 1
                }
            case actionTypes.PREV_QUESTION:
                console.log(state.selectedQuestion)
                return {
                    ...state,
                    selectedQuestion: state.selectedQuestion - 1
                }
        default: 
            return state;
    }
}

export default reducer;