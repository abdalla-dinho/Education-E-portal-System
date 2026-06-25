import styled from "styled-components";
import { Error, SettingsHeader, VerticalRow, Wrapper } from "./UpdatePassword";

import { Label } from "../../UI/Label";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { FileInput } from "../../UI/FileInput";
import { useUpdateAccount } from "./useUpdateAccount";
import { Grid } from "../../UI/Grid";
import { useUser } from "../Authentication/useUser";

const StyledUpdateUsername = styled.div`
  padding: 1rem 1rem;
  width: 78%;
`;

function UpdateUsername() {
  const {
    user: { email },
  } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { updateAccount } = useUpdateAccount();

  function onSubmit(data) {
    const { fullname, image } = data;
    console.log(fullname);

    // const avatar = image.file
    const avatar = image[0];

    updateAccount({ fullname, avatar });
    reset();
  }
  return (
    <StyledUpdateUsername>
      <SettingsHeader>update account</SettingsHeader>
      <VerticalRow gap="2.5rem" onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Label>Email adress</Label>
          <Input disabled={true} placeholder={email} />
        </Grid>

        <Grid>
          <Label>Full name</Label>
          <div>
            <Input
              {...register("fullname", {
                required: "The field should not be empty",
              })}
            />

            {errors.fullName && <Error>{errors.fullName.message}</Error>}
          </div>
        </Grid>

        <Grid>
          <Label>avatar image </Label>
          <FileInput type="file" {...register("image")} />
        </Grid>
        <Wrapper>
          <Button type="reset" onClick={() => reset()}>
            cancel
          </Button>
          <Button size="large" variation="primary">
            Update account
          </Button>
        </Wrapper>
      </VerticalRow>
    </StyledUpdateUsername>
  );
}

export default UpdateUsername;
