import React from "react";
import { shallow } from "enzyme";
import Form from "../src/components/Form";

const setResultAnswer = jest.fn();
const removeAnswer = jest.fn();
const enableNext = jest.fn();

const props = {
  questionData: {
    question: "Who?",
    answer: "Mark",
    id: 0,
  },
  setResultAnswer,
  removeAnswer,
  enableNext,
};

describe("Renders Form", () => {
  it("renders Form component", () => {
    const wrapper = shallow(<Form {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders text content", () => {
    const wrapper = shallow(<Form {...props} />);
    expect(wrapper.text()).toContain("<Formik />");
  });
});
