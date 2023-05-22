import { UserTokenStructure } from "../../store/user/types";
import jwt_decode from "jwt-decode";
const useToken = () => {
  const getTokenData = (token: string): UserTokenStructure => {
    const decodedTokenData: { sub: string } = jwt_decode(token);

    const userData: UserTokenStructure = {
      id: decodedTokenData.sub,
      token: token,
    };
    return userData;
  };
  return { getTokenData };
};

export default useToken;
