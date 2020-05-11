import React, { useState } from "react";
import Form from "./Form";

const QuestionCard = ({ questionData, setResultAnswer }) => {
  const [answerQuery, setAnswerQuery] = useState("");

  const handleChange = (event) => {
    setAnswerQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      questionId: questionData.id,
      answer: answerQuery,
    };
    setResultAnswer(data);
  };

  return (
    <div>
      {questionData.question}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={answerQuery} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
      <Form   questionData={questionData}
        setResultAnswer={setResultAnswer}/>
    </div>
  );
};

export default QuestionCard;
