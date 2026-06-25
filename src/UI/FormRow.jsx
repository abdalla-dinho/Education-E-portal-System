import Row from "./Row";
import { Error } from "../features/Settings/UpdatePassword";
import { useSearchParams } from "react-router-dom";
import { useExamCourse } from "../features/ExamManagment/useExamCourses";

import { Label } from "./Label";

function FormRow({ register, errors }) {
  const { examCourse, isLoading } = useExamCourse();
  const [searchParams] = useSearchParams();
  const semester = Number(searchParams.get("semester")) || 1;
  const major = Number(searchParams.get("major")) || 1;

  const currMajor =
    major == 1
      ? "Computer Science"
      : major == 2
      ? "Public Adminstration"
      : "Bank & finances";

  return (
    <>
      <Row type="vertical">
        <Label> Course name</Label>

        <select
          {...register("course", {
            required: "the field should not be empty",
          })}
        >
          {!isLoading
            ? examCourse.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.name}
                </option>
              ))
            : "Loading..."}
        </select>

        {errors.course && <Error>{errors.course.message}</Error>}
      </Row>

      <Row type="vertical">
        <Label> major</Label>
        <select {...register("major_id")}>
          <option value={major}>{currMajor}</option>
        </select>
      </Row>

      <Row type="vertical">
        <Label> semester</Label>
        <select {...register("semester_id")}>
          <option value={semester}>{semester}</option>
        </select>
      </Row>
    </>
  );
}

export default FormRow;
