import Header from "../../UI/Header";
import Row from "../../UI/Row";
import Input from "../../UI/Input";
import styled from "styled-components";
import { Label } from "../../UI/Label";
import FormRow from "../../UI/FormRow";
import Button from "../../UI/Button";
import { useForm } from "react-hook-form";
import { useAddAssigment } from "./useAddAssigment";

const StyledAssigmentForm = styled.div`
  margin-top: 4.4rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  column-gap: 1rem;
  row-gap: 3rem;
  padding: 3rem 2rem;
  margin-top: 2.6rem;
  background-color: var(--color-grey-50);
  border-radius: 7px;

  > div {
    > select {
      border: 1px solid var(--color-grey-100);
      padding: 0.8rem;
      border-radius: 4px;
      color: var(--color-grey-700);
    }
  }
`;
const DateInput = styled.input`
  padding: 0.7rem 2rem 0.7rem 0.8rem;
  font-size: var(--font-size-md);
  border: 1px solid var(--color-grey-300);
`;
function AssimentManagemntForm() {
  const { addAssigment } = useAddAssigment();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addAssigment(data);
    reset();
  };
  return (
    <StyledAssigmentForm>
      <Header as="h1">Create student Assigment</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row type="vertical">
          <Label>Assigment title</Label>
          <Input type="exams" {...register("assignment_title")} />
        </Row>

        <Row type="vertical">
          <Label>Due date</Label>
          <DateInput type="date" {...register("due_date")} />
        </Row>
        <Row>
          <Label>Student Id</Label>
          <Input type="exams" {...register("student_id")} />
        </Row>

        <Row type="vertical">
          <Label>Status</Label>
          <select {...register("status")}>
            <option>Pending</option>
            <option>Submitted</option>
            <option>Graded</option>
          </select>
        </Row>

        <FormRow register={register} errors={errors} />
        <Row>
          <Button size="small" onClick={() => reset()}>
            Cancel
          </Button>
          <Button size="large" variation="primary">
            Add Assigment
          </Button>
        </Row>
      </Form>
    </StyledAssigmentForm>
  );
}

export default AssimentManagemntForm;
  