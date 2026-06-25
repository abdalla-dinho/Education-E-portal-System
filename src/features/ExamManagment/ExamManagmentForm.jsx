import styled from "styled-components";
import Row from "../../UI/Row";
import { Label } from "../../UI/Label";
import Input from "../../UI/Input";

import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import { useAddExams } from "./useAddExms";
import { Error } from "../Settings/UpdatePassword";
import FormRow from "../../UI/FormRow";

const StyledExamManagmentRow = styled.form`
  display: grid;
  flex-direction: column;
  column-gap: 1rem;
  row-gap: 3rem;
  background-color: var(--color-grey-50);
  padding: 2rem;
  border-radius: 6px;

  /* width: 80%; */
  grid-template-columns: 1fr 1fr 1fr 2fr;
  align-items: center;
  > div {
    gap: 1rem;
    > select {
      border: 1px solid var(--color-grey-100);
      padding: 0.8rem;
      border-radius: 4px;
      color: var(--color-grey-700);
    }
  }
`;

function ExamManagmentForm() {
  const { addExams } = useAddExams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addExams(data);
    reset();
  };

  return (
    <StyledExamManagmentRow onSubmit={handleSubmit(onSubmit)}>
      <Row type="vertical">
        <Label>Marks</Label>
        <Input
          type="exams"
          {...register("marks", { required: "the field should not be empty" })}
        />

        {errors.marks && <Error>{errors.marks.message}</Error>}
      </Row>

      <Row type="vertical">
        <Label>Grade point</Label>
        <select
          {...register("Grade_point", {
            required: "the field should not be empty",
          })}
        >
          <option>4.0</option>
          <option>3.7</option>
          <option>3.3</option>
          <option>3.0</option>
          <option>2.0</option>
          <option>1.0</option>
          <option>0.0</option>
        </select>

        {errors.Grade_point && <Error>{errors.Grade_point.message}</Error>}
      </Row>
      <Row type="vertical">
        <Label>Grade</Label>
        <select
          {...register("grade", { required: "the field should not be empty" })}
        >
          <option>A+</option>
          <option>A</option>
          <option>B+</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>F</option>
        </select>

        {errors.grade && <Error>{errors.grade.message}</Error>}
      </Row>
      <Row type="vertical">
        <Label> year</Label>
        <select {...register("academic_year")}>
          <option>2025/26</option>
          <option>2024/25</option>
          <option>2023/24</option>
        </select>
      </Row>
      <Row type="vertical">
        <Label> student id</Label>
        <Input
          type="exams"
          {...register("student_id", {
            required: "the field should not be empty",
          })}
        />

        {errors.student_id && <Error>{errors.student_id.message}</Error>}
      </Row>

      <FormRow register={register} errors={errors} />
      <Button size="small">Cancel</Button>
      <Row>
        <Button size="large" variation="primary">
          Add Exam
        </Button>
      </Row>
    </StyledExamManagmentRow>
  );
}

export default ExamManagmentForm;
