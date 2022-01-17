// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Button from ".";
import { ButtonProps } from "./Button.types";

describe("Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "component render";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("component render");
  });
});
