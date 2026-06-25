// import Login from "../../Pages/Login";
import styled from "styled-components";
import Input from "../../UI/Input";
import Row from "../../UI/Row";
import Button from "../../UI/Button";
import { Label } from "../../UI/Label";

import { useSignIn } from "./useSignIn";
import { useForm } from "react-hook-form";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-grey-0);
  padding: 3.2rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
`;

const Error = styled.p`
  color: var(--color-red-700);
`;

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const { login, isPending, error } = useSignIn();

  function onSubmit(data, e) {
    e.preventDefault();
    const { email, password } = data;
    login({ email, password });
  }
  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Row type="vertical">
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
      </Row>
      <Row type="vertical">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
      </Row>

      <Row special="login">
        <Button
          size="large"
          variation="primary"
          type="submit"
          disable={isPending}
        >
          {isPending ? "Login.." : "Login"}
        </Button>
      </Row>

      {error && <Error>{error.message}</Error>}
    </StyledLoginForm>
  );
}

export default LoginForm;
