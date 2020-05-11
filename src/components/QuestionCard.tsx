import React, { useState } from "react";
import Form from "./Form";

type Props = {
  questionData: any;
  setResultAnswer: (data) => void;
  enableNext: () => void;
};

const QuestionCard = ({ questionData, setResultAnswer, enableNext }: Props) => {
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
      <Form
        questionData={questionData}
        setResultAnswer={setResultAnswer}
        enableNext={enableNext}
      />
    </div>
  );
};

export default QuestionCard;
