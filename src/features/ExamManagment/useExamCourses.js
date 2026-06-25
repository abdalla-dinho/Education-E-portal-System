import { useQuery } from "@tanstack/react-query";
import { getExamCourses } from "../../service/examsApi";
import { useSearchParams } from "react-router-dom";

export function useExamCourse() {
  const [searchParams] = useSearchParams();

  const semester = Number(searchParams.get("semester")) || 1;
  const major = Number(searchParams.get("major")) || 1;

  const { data: examCourse, isLoading } = useQuery({
    queryFn: () => getExamCourses(semester, major),
    queryKey: ["examcourses", semester, major],
  });

  return { examCourse, isLoading };
}
