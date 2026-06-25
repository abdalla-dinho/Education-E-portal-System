import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../service/coursesApi";

import { userUrl } from "../../Hooks/useUrl";

export function useCourse() {
  const { year, semester } = userUrl();
  const { isLoading, data: courses } = useQuery({
    queryKey: ["courses", year, semester],
    queryFn: () => getCourses(year, semester),
  });

  return { isLoading, courses };
}
