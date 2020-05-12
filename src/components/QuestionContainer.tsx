import React from "react";
import Form from "./Form";
import styled from "styled-components";


export const InputContainer = styled.div`
  display: grid;
  align-items: center;
  padding: 0.4rem 0.3rem;
  border-radius: 1rem;
`;


const questionContainer = (props) => {
  let currentQuestion = null;
  if (props.questionIndex !== -1) {
    currentQuestion = props.assessment.find((item) => {
      return item.id === props.questionIndex;
    });
  }
  return (
    currentQuestion && (
      <InputContainer>
      <Form
        key={currentQuestion.id}
        questionData={currentQuestion}
        setResultAnswer={props.setResultAnswer}
        enableNext={props.enableNext}
        />
        </InputContainer>
    )
  );
};

export default questionContainer;
