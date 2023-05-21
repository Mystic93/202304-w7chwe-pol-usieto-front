import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;

  .loginform-label {
    padding: 5px;
  }

  .loginform-input {
    padding: 5px;
    border-radius: 10%;
  }

  .loginform-button {
    padding: 8px;
    cursor: pointer;
    background-color: aliceblue;
    border-radius: 10%;
  }
`;
export default LoginFormStyled;
