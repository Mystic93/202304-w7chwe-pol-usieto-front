import Layout from "../Layout/Layout";

import LoginForm from "../LoginForm/Loginform";

const App = (): JSX.Element => {
  const submitForm = () => null;

  return (
    <>
      <Layout />
      <LoginForm submitForm={submitForm}></LoginForm>
    </>
  );
};

export default App;
