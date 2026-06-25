import styled from "styled-components";
import Input from "../../UI/Input";
import { Label } from "../../UI/Label";
import Button from "../../UI/Button";
import { useUpdatePassword } from "./useUpdatePassword";
import { useForm } from "react-hook-form";
import { Grid } from "../../UI/Grid";

const StyledPassword = styled.div`
  padding: 1rem 1rem;

  width: 78%;
`;
export const SettingsHeader = styled.h3`
  padding: 2rem 0 1.3rem 2rem;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

export const VerticalRow = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  background-color: var(--color-grey-50);
  margin-left: 2rem;
  border-radius: var(--border-radius-md);
  gap: ${(props) => props.gap};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Error = styled.p`
  margin: 0.8rem;
  color: #f53333;
`;

function UpdatePassword() {
  const { updatePassword } = useUpdatePassword();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { newPassword } = data;

    updatePassword(newPassword);
    reset();
  }

  return (
    <StyledPassword>
      <SettingsHeader>update password</SettingsHeader>
      <VerticalRow gap="2.5rem" onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Label>New password</Label>
          <div>
            <Input
              {...register("newPassword", {
                required: "The field should not be empty",

                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters ",
                },
              })}
            />
            {errors.newPassword && <Error>{errors.newPassword.message}</Error>}
          </div>
        </Grid>

        <Grid>
          <Label>Repeat new password</Label>
          <div>
            <Input
              {...register(
                "repeatPassword",
                {
                  validate: (value) =>
                    value === getValues("newPassword") ||
                    "passwords do not match ",
                },
                { required: true }
              )}
            />
            {errors.repeatPassword && (
              <Error>{errors.repeatPassword.message}</Error>
            )}
          </div>
        </Grid>
        <Wrapper>
          <Button onClick={() => reset()}>cancel</Button>
          <Button size="large" variation="primary">
            Update password
          </Button>
        </Wrapper>
      </VerticalRow>
    </StyledPassword>
  );
}

export default UpdatePassword;
