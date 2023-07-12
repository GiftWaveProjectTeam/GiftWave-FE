/** test 목록
 * 1. size별 css 값을 제대로 불러오는지
 * 2. label 텍스트 제대로 출력되는지
 * 3. color css 적용여부
 * 4. onClick 함수 작동하는지
 */

import { getByTestId, render, screen } from "@testing-library/react";
import Button from "./Button";

// describe("atom button", () => {
//   it("test1", () => {
//     render(<Button size="small" />);
//     const button = getByTestId(<Button size="small" />, "atom-button");
//     expect(button).toHaveStyle({
//       fontSize: "12px",
//       padding: "10px 16px",
//     });
//   });

it("button size", () => {
  document.body.innerHTML = `
      <Button data-testid="10" size="small"/>
      <Button data-testid="20" size="medium"/>
      <Button data-testid="30" size="large"/>
    `;

  expect(screen.queryByTestId("10")).toHaveStyle({
    fontSize: "12px",
    padding: "10px 16px",
  });
  expect(screen.queryByTestId("20")).toHaveStyle({
    fontSize: "14px",
    padding: "10px 20px",
  });
  expect(screen.queryByTestId("30")).toHaveStyle({
    fontSize: "16px",
    padding: "12px 24px",
    width: "350px",
  });
});
