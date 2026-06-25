import { useSearchParams } from "react-router-dom";

export function userUrl() {
  const [searchParams] = useSearchParams();
  const year = Number(searchParams.get("year")) || 1;
  const semester = Number(searchParams.get("semester")) || 1;

  return { year, semester };
}
