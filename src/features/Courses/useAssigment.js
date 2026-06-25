import { useQuery } from "@tanstack/react-query";
import { getAssigments } from "../../service/coursesApi";

import { userUrl } from "../../Hooks/useUrl";

export function useAssigment() {
  const { year, semester } = userUrl();

  const { isLoading, data: assigments } = useQuery({
    queryKey: ["assigments", year, semester],
    queryFn: () => getAssigments(year, semester),
  });

  return { isLoading, assigments };
}
