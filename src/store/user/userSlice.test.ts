import { UserStateStructure, UserTokenStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an empty current state and a loginUser action with a payload", () => {
    test("Then ir should return a new state with a logged user", () => {
      const currentState: UserStateStructure = {
        id: "",
        token: "",
        isLogged: false,
      };

      const userToken: UserTokenStructure = {
        id: "998656",
        token: "tokensito",
      };

      const expectedNewState: UserStateStructure = {
        id: "998656",
        token: "tokensito",
        isLogged: true,
      };

      const newUserState = userReducer(
        currentState,
        loginUserActionCreator(userToken)
      );

      expect(expectedNewState).toStrictEqual(newUserState);
    });
  });
});
