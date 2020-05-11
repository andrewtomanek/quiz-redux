import React from "react";
import Form from "./Form";


const questionContainer = (props) => {
  let currentQuestion = null;
  if (props.questionIndex !== -1) {
    currentQuestion = props.assessment.find((item) => {
      return item.id === props.questionIndex;
    });
  }
  return (
    currentQuestion && (
      <Form
        key={currentQuestion.id}
        questionData={currentQuestion}
        setResultAnswer={props.setResultAnswer}
        enableNext={props.enableNext}
      />
    )
  );
};

export default questionContainer;
