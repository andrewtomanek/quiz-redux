import React from "react";
import { shallow } from "enzyme";
import Header from "../src/components/Header";

describe("Renders Header", () => {
  it("renders Header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders title text", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.text()).toEqual("Build a sentence game");
  });
});