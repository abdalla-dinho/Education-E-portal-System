import styled from "styled-components";
import LoginForm from "../features/Authentication/LoginForm";

const StyledLogin = styled.div`
  width: 100%;
  height: 80dvh;
  display: grid;
  place-items: center;
  padding: 3.6rem 0;
`;
function Login() {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
