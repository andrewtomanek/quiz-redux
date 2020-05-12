// Helper styles for demo
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { ControlsLayout, InputForm, InputLabel } from "../styles/elements";

const ErrorText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--red);
`;

type Props = {
  questionData: any;
  setResultAnswer: (data) => void;
  enableNext: () => void;
};

const Form = ({ questionData, setResultAnswer, enableNext }: Props) => {
  return (
    <Formik
      initialValues={{ questionQuery: "" }}
      onSubmit={(values) => {
        const data: {
          questionId: any;
          answer: string;
        } = {
          questionId: questionData.id,
          answer: values.questionQuery,
        };
        enableNext();
        setResultAnswer(data);
      }}
      validationSchema={Yup.object().shape({
        questionQuery: Yup.string()
          .required("Alphanumeric characters required")
          .matches(
            /^[0-9a-zA-Z]+$/,
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
              placeholder={questionData.answer}
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
            {errors.questionQuery && touched.questionQuery && (
              <ErrorText>{errors.questionQuery}</ErrorText>
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
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </ControlsLayout>
          </InputForm>
        );
      }}
    </Formik>
  );
};

export default Form;
