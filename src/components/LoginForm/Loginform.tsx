import { useState } from "react";
import { UserCredentials } from "../../store/user/types";
import LoginFormStyled from "./LoginFormStyled";

export interface LoginFormProps {
  submitForm: (userState: UserCredentials) => void;
}

const LoginForm = ({ submitForm }: LoginFormProps): JSX.Element => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userState, setUserCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const isReady = userState.username !== "" && userState.password !== "";

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    submitForm(userState);
    setUserCredentials(initialUserCredentials);
  };

  return (
    <LoginFormStyled className="loginform" onSubmit={handleSubmit}>
      <h2 className="loginform-title">Sign in</h2>
      <label className="loginform-label" htmlFor="username">
        {" "}
        Username:
      </label>
      <input
        type="text"
        className="loginform-input"
        id="username"
        onChange={onChangeUserData}
        value={userState.username}
      />
      <label className="loginform-label" htmlFor="password">
        {" "}
        Password:
      </label>
      <input
        type="password"
        className="loginform-input"
        id="password"
        onChange={onChangeUserData}
        value={userState.password}
      />
      <button className="loginform-button" disabled={!isReady}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
