// Helper styles for demo
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

type Props = {
  questionData: any;
  setResultAnswer?: (data) => void;
};

const Form = ({ questionData, setResultAnswer }: Props) => {
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
        setResultAnswer(data);
      }}
      validationSchema={Yup.object().shape({
        questionQuery: Yup.string().required("Required question"),
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="questionQuery" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="questionQuery"
              placeholder="Enter your questionQuery"
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
              <div className="input-feedback">{errors.questionQuery}</div>
            )}

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
            {JSON.stringify(props, null, 2)}
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
