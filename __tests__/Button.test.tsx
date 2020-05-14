import React from "react";
import { shallow } from "enzyme";
import Button from "../src/components/Button";

const clicked = jest.fn();

const props = {
  disabled: false,
  clicked,
  children: "Next question",
};

describe("Renders Button", () => {
  it("renders Button component", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders button text", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.text()).toEqual("Next question");
  });
});
