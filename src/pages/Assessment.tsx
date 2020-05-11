import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../store/reducers/quizReducer";

import * as actionCreators from "../store/actions/index";
import QuestionContainer from "../components/QuestionContainer";
import Button from "../components/Button";
import Score from "../components/Score";

const assessment = [
  {
    question: "Who?",
    answer: "first 1",
    id: 0,
  },
  {
    question: "What?",
    answer: "second 2",
    id: 1,
  },
  {
    question: "When?",
    answer: "third 3",
    id: 2,
  },
  {
    question: "Where?",
    answer: "fourth 4",
    id: 3,
  },
];

interface StateProps {
  answersInfo: {};
  currentIndex: number;
  isSubmit: boolean;
}

interface DispatchProps {
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  setResultAnswer: (data) => void;
}

const Assessment = (props: StateProps & DispatchProps) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const onPrevButtonHandler = () => {
    props.onPrevQuestion();
  };

  const onNextButtonHandler = () => {
    props.onNextQuestion();
  };

  const onSubmitQuizHandler = () => {
    setIsSubmit(true);
  };

  const setResultAnswer = (data) => {
    props.setResultAnswer(data);
  };

  const getScore = () => {
    let score;
    score = props.answersInfo;
    return score;
  };

  let nextButton = <Button clicked={onNextButtonHandler}>NEXT</Button>;
  if (props.currentIndex === 3) {
    nextButton = <Button clicked={onSubmitQuizHandler}>SUBMIT</Button>;
  }

  let assessmentObj = (
    <div>
      <QuestionContainer
        assessment={assessment}
        answersInfo={props.answersInfo}
        setResultAnswer={setResultAnswer}
        questionIndex={props.currentIndex}
      />
      <div>
        <div>
          {props.currentIndex > 0 ? (
            <Button clicked={onPrevButtonHandler}>PREV</Button>
          ) : null}
        </div>
        <div>{nextButton}</div>
      </div>
    </div>
  );

  if (isSubmit) {
    const score = getScore();
    assessmentObj = <Score score={score} />;
  }

  return <div>{assessmentObj}</div>;
};

const mapStateToProps = (state: State) => {
  return {
    currentIndex: state.currentQuestion,
    answersInfo: state.answersInfo,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
    onPrevQuestion: () => dispatch(actionCreators.prevQuestion()),
    setResultAnswer: (data) => dispatch(actionCreators.setAnswer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
