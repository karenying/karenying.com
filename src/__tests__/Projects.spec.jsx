import React from "react";
import { shallow, mount } from "enzyme";

import Projects from "../Components/Projects";

describe("Projects", () => {
  it("renders the two arrows", () => {
    const wrapper = shallow(<Projects />);

    expect(wrapper.find("Arrow").length).toEqual(2);
  });

  it("renders gradient.png as the first slide", () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper.find("h2").text()).toBe("gradient.png");
  });

  it("renders dayz when the right arrow is clicked", () => {
    const wrapper = mount(<Projects />);
    /*     wrapper.find(".arrow-container").at(1).simulate("click");
    wrapper.update();
    wrapper.simulate("keydown", { keyCode: 39 });
    expect(wrapper.find("h2").text()).toBe("dayz"); */
  });

  it("renders gradient.png when the left arrow is clicked", () => {});
});
