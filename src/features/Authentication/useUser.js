import { useQuery } from "@tanstack/react-query";
import { getSession } from "../../service/authApi";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getSession,
  });

  return { user, isAuthenticated: user?.role === "authenticated", isLoading };
}
