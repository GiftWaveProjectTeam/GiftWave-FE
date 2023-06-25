import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "@/src/app/page";

describe("<Home />", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);
    const heading = screen.getByText("heading");

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
