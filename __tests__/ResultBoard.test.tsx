import React from "react";
import { shallow } from "enzyme";
import ResultBoard from "../src/components/ResultBoard";

const resetData = jest.fn();

const props = {
  resultData: { 1: "John", 2: "working" },
  resetData,
};

describe("Renders ResultBoard", () => {
  it("renders ResultBoard component", () => {
    const wrapper = shallow(<ResultBoard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders children", () => {
    const wrapper = shallow(<ResultBoard {...props} />);
    expect(wrapper.childAt(0).children()).toHaveLength(2);
  });

  it("renders text content", () => {
    const wrapper = shallow(<ResultBoard {...props} />);
    expect(wrapper.text()).toContain("John working <Button />");
  });
  it("renders Start button", () => {
    const wrapper = shallow(<ResultBoard {...props} />);
    expect(wrapper.childAt(1).childAt(0).text()).toEqual("Start again");
  });
});
