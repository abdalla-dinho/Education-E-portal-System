import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../service/authApi";

export function useProfile() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return { profile, isLoading };
}
