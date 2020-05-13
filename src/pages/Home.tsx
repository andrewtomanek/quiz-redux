import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../store/reducers/quizReducer";
import {
  prevQuestion,
  nextQuestion,
  removeAnswer,
  resetResults,
  resetIndex,
  setAnswer,
} from "../store/actions/index";
import Header from "../components/Header";
import QuestionContainer from "../components/QuestionContainer";
import Button from "../components/Button";
import ResultBoard from "../components/ResultBoard";
import formData from "../data/formData";
import styled from "styled-components";
import { PageLayout, ControlsLayout } from "../styles/elements";

const QuestionBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
  background-color: var(--yellow);
  height: 100%;
  width: 80vw;
  border-radius: 1rem;
`;

interface StateProps {
  answersData: {};
  currentIndex: number;
  isSubmit: boolean;
}

interface DispatchProps {
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  resetIndex: () => void;
  resetResults: () => void;
  setResultAnswer: (data) => void;
  resetAnswer: (id) => void;
}

const Home = (props: StateProps & DispatchProps) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  console.log(formData.length);

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

  const removeAnswer = (id) => {
    props.resetAnswer(id);
    setIsSubmit(false);
    setIsDisabled(true);
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
  if (props.currentIndex === formData.length-1) {
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

  return (
    <PageLayout>
      <Header />
      {!isSubmit ? (
        <QuestionBox>
          <QuestionContainer
            assessment={formData}
            answersData={props.answersData}
            setResultAnswer={setResultAnswer}
            removeAnswer={removeAnswer}
            enableNext={enableNext}
            questionIndex={props.currentIndex}
          />
          <ControlsLayout>
            {props.currentIndex > 0 ? (
              <Button clicked={onPrevButtonHandler}>Previous question</Button>
            ) : null}
            {nextButton}
          </ControlsLayout>
        </QuestionBox>
      ) : (
        <ResultBoard resetData={resetData} resultData={props.answersData} />
      )}
    </PageLayout>
  );
};

const mapStateToProps = (state: State) => {
  return {
    currentIndex: state.currentQuestion,
    answersData: state.answersData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onNextQuestion: () => dispatch(nextQuestion()),
    onPrevQuestion: () => dispatch(prevQuestion()),
    resetIndex: () => dispatch(resetIndex()),
    resetResults: () => dispatch(resetResults()),
    setResultAnswer: (data) => dispatch(setAnswer(data)),
    resetAnswer: (id) => dispatch(removeAnswer(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
