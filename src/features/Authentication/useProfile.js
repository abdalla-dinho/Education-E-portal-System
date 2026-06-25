import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../service/authApi";

export function useProfile() {
  const { data: profiles, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return { profiles, isLoading };
}
