import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it shuld show a heading with the text 'Sign in'", () => {
      const expectedText = "Sign in";

      render(<LoginPage />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
