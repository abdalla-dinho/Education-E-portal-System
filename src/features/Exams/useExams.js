import { useQuery } from "@tanstack/react-query";
import { getExams } from "../../service/examsApi";

export function useExam() {
  // const { year, semester } = userUrl();
  const { data: exams, isLoading } = useQuery({
    queryKey: ["exams"],
    queryFn: () => getExams(),
  });

  return { exams, isLoading };
}
