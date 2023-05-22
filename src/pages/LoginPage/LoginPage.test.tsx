import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it shuld show a heading with the text 'Sign in'", () => {
      const expectedText = "Sign in";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
