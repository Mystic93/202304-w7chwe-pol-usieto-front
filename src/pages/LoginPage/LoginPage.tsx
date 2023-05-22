import LoginForm from "../../components/LoginForm/Loginform";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../store/user/types";

const LoginPage = (): JSX.Element => {
  const { getUserToken } = useUser();

  const handleFormSubmit = async (user: UserCredentials) => {
    const token = await getUserToken(user);
    return token;
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
