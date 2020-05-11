import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../store/reducers/quizReducer";
import * as actionCreators from "../store/actions/index";
import QuestionContainer from "../components/QuestionContainer";
import Button from "../components/Button";
import ResultBoard from "../components/ResultBoard";
import formData from "../data/formData";

interface StateProps {
  answersInfo: {};
  currentIndex: number;
  isSubmit: boolean;
}

interface DispatchProps {
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  resetIndex: () => void;
  resetResults: () => void;
  setResultAnswer: (data) => void;
}

const Home = (props: StateProps & DispatchProps) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(props.currentIndex);

  useEffect(() => {
    setIsDisabled(true);
  }, [props.currentIndex]);

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

  const resetData = () => {
    props.resetResults();
    props.resetIndex();
    setIsSubmit(false);
  };

  const enableNext = () => {
    setIsDisabled(!isDisabled);
  };

  let nextButton;
  if (props.currentIndex === 3) {
    nextButton = (
      <Button disabled={isDisabled} clicked={onSubmitQuizHandler}>
        Submit answers
      </Button>
    );
  } else if (props.currentIndex === -1) {
    nextButton = <Button clicked={onNextButtonHandler}>Start</Button>;
  } else {
    nextButton = (
      <Button disabled={isDisabled} clicked={onNextButtonHandler}>
        Next question
      </Button>
    );
  }

  let assessmentObj = (
    <div>
      <QuestionContainer
        assessment={formData}
        answersInfo={props.answersInfo}
        setResultAnswer={setResultAnswer}
        enableNext={enableNext}
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
    assessmentObj = (
      <ResultBoard resetData={resetData} resultData={props.answersInfo} />
    );
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
    resetIndex: () => dispatch(actionCreators.resetIndex()),
    resetResults: () => dispatch(actionCreators.resetResults()),
    setResultAnswer: (data) => dispatch(actionCreators.setAnswer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
