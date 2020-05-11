import React from "react";
import QuestionCard from "./QuestionCard";

const questionContainer = (props) => {
 // console.log(props.assessment[props.questionIndex]);
  console.log(props.questionIndex);
  let currentQuestion = null;
  if (props.questionIndex !== -1) {
    currentQuestion = props.assessment.find((item) =>{
      return item.id === props.questionIndex
        })
        console.log(currentQuestion);
  
  }
return currentQuestion && <QuestionCard key={currentQuestion.id} questionData={currentQuestion} setResultAnswer={props.setResultAnswer}/>;
};

export default questionContainer;
