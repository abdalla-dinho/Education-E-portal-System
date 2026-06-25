import { useQuery } from "@tanstack/react-query";
import { getCourseScheduling } from "../../service/coursesApi";

import { userUrl } from "../../Hooks/useUrl";

export function useCourseScheduling() {
  const { year, semester } = userUrl();

  const { data: scheduling, isLoading } = useQuery({
    queryKey: ["scheduling", year, semester],
    queryFn: () => getCourseScheduling(year, semester),
  });

  return { scheduling, isLoading };
}
