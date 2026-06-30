import SpinnerFull from "../../UI/SpinnerFull";
import Assigments from "./Assigments";
import CourseOverview from "./CourseOverview";
import CourseScheduling from "./CourseScheduling";
import { useAssigment } from "./useAssigment";
import { useCourse } from "./useCourse";
import { useCourseScheduling } from "./useCourseScheduling";

function CoursesTable() {
  const { isLoading: isLoading1 } = useCourse();
  const { isLoading: isLoading3 } = useCourseScheduling();
  const { isLoading: isLoading2 } = useAssigment();

  if (isLoading2 || isLoading1 || isLoading3) return <SpinnerFull />;

  return (
    <div>
      <CourseOverview />
      <Assigments />

      <CourseScheduling />
    </div>
  );
}

export default CoursesTable;
