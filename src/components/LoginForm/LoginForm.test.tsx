import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import LoginForm from "./Loginform.js";

describe("Given a LoginForm component", () => {
  const usernameLabelText = "Username:";
  const passwordLabelText = "Password:";
  const submitForm = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show a username and password input text field", () => {
      render(<LoginForm submitForm={submitForm} />);

      const usernameLabel = screen.getByLabelText(usernameLabelText);
      const passwordLabel = screen.getByLabelText(passwordLabelText);

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Sign in'", () => {
      const expectedText = "Sign in";

      render(<LoginForm submitForm={submitForm} />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const expectedText = "Login";

      render(<LoginForm submitForm={submitForm} />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When both inputs are not empty", () => {
    test("Then the button should be able'", async () => {
      render(<LoginForm submitForm={submitForm} />);
      const button = screen.getByRole("button");
      await userEvent.type(screen.getByLabelText(usernameLabelText), "pol");
      await userEvent.type(screen.getByLabelText(passwordLabelText), "786543");

      expect(button).toBeEnabled();
    });
  });
});
