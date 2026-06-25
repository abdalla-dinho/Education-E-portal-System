import { useMutation, useQuery } from "@tanstack/react-query";
import { signInApi } from "../../service/authApi";
import { useNavigate } from "react-router";

export function useSignIn() {
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => signInApi({ email, password }),
    onSuccess: () => {
      navigate("/portal");
    },
    onError: (error) => console.error(error.message),
  });

  return { login, isPending, error };
}
