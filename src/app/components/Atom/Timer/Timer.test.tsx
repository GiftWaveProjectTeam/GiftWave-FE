import React from "react";
import { render, waitFor } from "@testing-library/react";
import Timer from "./Timer";
import { act } from "react-dom/test-utils";

describe("Timer component", () => {
  it("renders correctly with default mode", () => {
    const { container } = render(<Timer maxTime={90} trigger={false} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with hours mode", () => {
    const { container } = render(
      <Timer maxTime={3600} trigger={false} mode="hours" />
    );
    expect(container).toMatchSnapshot();
  });

  it("decreases timer and formats time correctly", async () => {
    jest.useFakeTimers();
    const { container } = render(<Timer maxTime={10} trigger={true} />);

    const expectedTime =
      "<div><div><span>00 : </span><span>10</span></div></div>";
    expect(container).toContainHTML(expectedTime);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    const expectedTime2 =
      "<div><div><span>00 : </span><span>09</span></div></div>";

    await waitFor(() => expect(container).toContainHTML(expectedTime2));

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    const expectedTime3 =
      "<div><div><span>00 : </span><span>08</span></div></div>";
    await waitFor(() => expect(container).toContainHTML(expectedTime3));
    jest.useRealTimers();
  });
});
