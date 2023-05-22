import { renderHook } from "@testing-library/react";
import { userTokenMock } from "../../mocks/tokenMock";
import useToken from "./useToken";

describe("Given a useToken custom hook", () => {
  describe("When calls getTokenData function with a token", () => {
    test("Then it should return a userData with id and the token", () => {
      const token = userTokenMock.token;

      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userData = getTokenData(token);

      expect(userData).toStrictEqual(userTokenMock);
    });
  });
});
