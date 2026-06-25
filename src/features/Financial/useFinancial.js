import { useQuery } from "@tanstack/react-query";

import { getStudentStatement } from "../../service/financialAPi";

export function useFinancial() {
  const { data: student_finance, isLoading } = useQuery({
    queryFn: getStudentStatement,
    queryKey: ["student_finance"],
  });

  return { student_finance, isLoading };
}
