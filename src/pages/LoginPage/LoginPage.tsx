import LoginForm from "../../components/LoginForm/Loginform";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";

const LoginPage = (): JSX.Element => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    const decodedTokenData = await getTokenData(token);
    localStorage.setItem("token", token);
    dispatch(loginUserActionCreator(decodedTokenData));
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
