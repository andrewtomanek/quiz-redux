import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State, QuestionData, ResultData } from "../store/reducers/quizReducer";
import {
  prevQuestion,
  nextQuestion,
  removeAnswer,
  resetResults,
  resetIndex,
  setAnswer,
} from "../store/actions/index";
import Form from "../components/Form";
import Header from "../components/Header";
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

export const InputContainer = styled.div`
  display: grid;
  align-items: center;
  padding: 0.4rem 0.3rem;
  border-radius: 1rem;
`;

interface StateProps {
  answersData: ResultData;
  currentIndex: number;
  isSubmit: boolean;
}

interface DispatchProps {
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  resetIndex: () => void;
  resetResults: () => void;
  setResultAnswer: (data: QuestionData) => void;
  resetAnswer: (id: number) => void;
}

const Home = (props: StateProps & DispatchProps) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

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

  const setResultAnswer = (data: QuestionData) => {
    props.setResultAnswer(data);
  };

  const removeAnswer = (id: number) => {
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

  let currentQuestionData: QuestionData | null | undefined = null;
  if (props.currentIndex !== -1) {
    currentQuestionData = formData.find((item) => {
      return item.id === props.currentIndex;
    });
  }

  let nextButton;
  if (props.currentIndex === formData.length - 1) {
    nextButton = (
      <Button disabled={isDisabled} clicked={onSubmitQuizHandler}>
        Display result
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
          {currentQuestionData && (
            <InputContainer>
              <Form
                key={currentQuestionData.id}
                questionData={currentQuestionData}
                setResultAnswer={setResultAnswer}
                removeAnswer={removeAnswer}
                enableNext={enableNext}
              />
            </InputContainer>
          )}
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
    setResultAnswer: (data: QuestionData) => dispatch(setAnswer(data)),
    resetAnswer: (id: number) => dispatch(removeAnswer(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
