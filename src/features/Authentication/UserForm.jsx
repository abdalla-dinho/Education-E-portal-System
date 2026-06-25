import Row from "../../UI/Row";
import { Label } from "../../UI/Label";
import Input from "../../UI/Input";
import styled from "styled-components";
// import { useAdminSignIn } from "./useAdminSignIn";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import { useCreateUser } from "./useCreateUser";
import { Heading } from "../../UI/Heading";

const StyledUserForm = styled.div`
  padding: 2rem;
`;

const VerticalRow = styled.form`
  background-color: var(--color-grey-50);
  display: grid;
  /* flex-direction: column;
   */

  grid-template-columns: 1fr 1fr;

  gap: 2rem;
  padding: 3rem;
  border-radius: var(--border-radius-sm);

  > p {
    display: flex;
    justify-content: end;
    gap: 1rem;
    align-items: center;
    > :last-child {
      width: 40%;
    }
  }
`;
const Select = styled.select`
  border: 1px solid var(--color-grey-200);
  color: var(--color-grey-800);
  padding: 0.4rem 2rem;
  border-radius: 4px;

  > option {
    background-color: var(--color-grey-50);
  }
`;

function UserForm() {
  const { register, handleSubmit, reset } = useForm();

  const { createUser, isUpdating } = useCreateUser();

  if (isUpdating) return null;

  function onSubmit(data) {
    const { email, password, major, fullname, semester, Role } = data;

    createUser({ email, password, fullname, semester, major, Role });
    reset();
  }

  return (
    <StyledUserForm>
      <Heading>Create new user</Heading>
      <VerticalRow onSubmit={handleSubmit(onSubmit)}>
        <Row type="vertical">
          <Label> Email Adress</Label>
          <Input {...register("email")} placeholder="example@gmail.com" />
        </Row>

        <Row type="vertical">
          <Label>username</Label>
          <Input {...register("fullname")} />
        </Row>

        <Row type="vertical">
          <Label>Password</Label>
          <Input {...register("password")} />
        </Row>
        {/* <Row type="vertical">
          <Label>Avatar</Label>
          <FileInput type="file" {...register("image")} />
        </Row> */}
        {/* <p></p> */}
        <Row>
          <Label>Major</Label>
          <Select {...register("major")}>
            <option value={1}>Computer Science</option>
            <option value={2}>Public Administration</option>
            <option value={3}>Bank & Finance</option>
          </Select>
        </Row>

        <Row>
          <Label>Semester</Label>
          <Select {...register("semester")}>
            <option value={1}>Year 1 sem 1</option>
            <option value={2}>Year 1 sem 2</option>
            <option value={3}>Year 2 sem 1</option>
            <option value={4}>Year 2 sem 2</option>
            <option value={5}>Year 3 sem 1</option>
            <option value={6}>Year 3 sem 2</option>
          </Select>
        </Row>

        <Row>
          <Label>Role</Label>
          <Input {...register("Role")} />
        </Row>

        {/* <p></p> */}
        <p>
          <Button size="small" variation="secondary">
            Cancel
          </Button>

          <Button size="large" variation="primary">
            Create
          </Button>
        </p>
      </VerticalRow>
    </StyledUserForm>
  );
}

export default UserForm;
