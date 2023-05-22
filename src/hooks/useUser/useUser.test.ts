import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/tokenMock";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";

describe("Given a useUser custom hook", () => {
  describe("When calls getUserToken funciton with a valid username and a password", () => {
    test("Then it should return a user token", async () => {
      const mockUserCredentials: UserCredentials = {
        username: "pol",
        password: "pol",
      };

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });
});
