import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import SignupForm from "./SignupForm";

describe("SignupForm", () => {
  it("renders the SignupForm without crashing", () => {
    render(<SignupForm />);
    const signupButton = screen.getByText("가입하기");
    expect(signupButton).toBeInTheDocument();
  });

  it("checks the user id is required and valid", () => {
    render(<SignupForm />);
    const userIdInput = screen.getByLabelText("아이디");

    fireEvent.change(userIdInput, { target: { value: "!@#@" } });
    expect(userIdInput).toHaveStyle("borderColor : red");

    fireEvent.change(userIdInput, { target: { value: "testuser123" } });
    expect(userIdInput).toHaveStyle("borderColor :  green");
  });

  it("check the password is required and valid", () => {
    render(<SignupForm />);
    const passwordInput = screen.getByLabelText("비밀번호");
    const passwordConfirmInput = screen.getByLabelText("비밀번호 확인");

    fireEvent.change(passwordInput, { target: { value: "123456as" } });
    fireEvent.change(passwordConfirmInput, { target: { value: "123456as" } });

    expect(passwordInput).toHaveStyle("borderColor : green");
    expect(passwordConfirmInput).toHaveStyle("borderColor : green");

    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.change(passwordConfirmInput, { target: { value: "asd" } });

    expect(passwordInput).toHaveStyle("borderColor :  red");
    expect(passwordConfirmInput).toHaveStyle("borderColor : red");
  });

  it("successfully submits the with valid inputs", async () => {
    render(<SignupForm />);
    const userIdInput = screen.getByLabelText("아이디");
    const passwordInput = screen.getByLabelText("비밀번호");
    const passwordConfirm = screen.getByLabelText("비밀번호 확인");
    const signupButton = screen.getByText("가입하기");
    const phoneInput = screen.getByLabelText("휴대폰인증");

    fireEvent.change(userIdInput, { target: { value: "testuser123" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(passwordConfirm, { target: { value: "password123" } });
    fireEvent.change(phoneInput, { target: { value: "01012345678" } });

    fireEvent.click(signupButton);

    expect(screen.getByTestId("submit-form")).toHaveFormValues({
      userId: "testuser123",
      password: "password123",
      phone: "01012345678",
    });
  });
});
