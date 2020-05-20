// Helper styles for demo
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { QuestionData } from "../store/reducers/quizReducer";
import { ControlsLayout, InputForm, InputLabel } from "../styles/elements";
import styled from "styled-components";

const ErrorText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--red);
`;

const ErrorSymbol = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
  color: green;
`;

type Props = {
  questionData: QuestionData;
  questionAnswer: string | undefined;
  setResultAnswer: (data: QuestionData) => void;
  removeAnswer: (id: number) => void;
  enableNext: () => void;
};

const Form = ({
  questionData,
  questionAnswer,
  setResultAnswer,
  removeAnswer,
  enableNext,
}: Props) => {
  const deleteAnswer = () => {
    removeAnswer(questionData.id);
  };
  return (
    <Formik
      initialValues={{ questionQuery: "" }}
      onSubmit={(values) => {
        const data = {
          question: questionData.question,
          answer: values.questionQuery,
          id: questionData.id,
        };
        enableNext();
        setResultAnswer(data);
      }}
      validationSchema={Yup.object().shape({
        questionQuery: Yup.string()
          .required("Alphanumeric characters required")
          .matches(
            /^[0-9a-zA-Z ]+$/,
            "Please input alphanumeric characters only"
          ),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <InputForm onSubmit={handleSubmit}>
            <InputLabel htmlFor="questionQuery">
              {questionData.question}
            </InputLabel>
            <input
              id="questionQuery"
              placeholder={
                questionAnswer ? questionAnswer : questionData.answer
              }
              type="text"
              value={values.questionQuery}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.questionQuery && touched.questionQuery
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.questionQuery && touched.questionQuery ? (
              <ErrorText>{errors.questionQuery}</ErrorText>
            ) : (
              <ErrorSymbol>{"\u{2714}"}</ErrorSymbol>
            )}
            <ControlsLayout>
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button
                type="button"
                className="outline"
                onClick={() => {
                  deleteAnswer();
                  handleReset();
                }}
                disabled={!dirty}
              >
                Delete
              </button>
              <button type="submit">Submit</button>
            </ControlsLayout>
          </InputForm>
        );
      }}
    </Formik>
  );
};

export default Form;
