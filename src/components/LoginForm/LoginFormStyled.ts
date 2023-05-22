import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: black;
  border-radius: 10%;

  .loginform-label {
    padding: 5px;
    color: orange;
  }

  .loginform-title {
    margin: 20px;
    color: orange;
  }

  .loginform-input {
    padding: 10px;
    border-radius: 10%;
    margin: 10px;
    background-color: aquamarine;
  }

  .loginform-button {
    padding: 8px;
    margin: 10px;
    background-color: aquamarine;
    border-radius: 10%;
  }
`;
export default LoginFormStyled;
