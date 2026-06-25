import { useMutation } from "@tanstack/react-query";
import { createUser as createUserApi } from "../../service/authApi";
import toast from "react-hot-toast";

export function useCreateUser() {
  const { mutate: createUser, isUpdating } = useMutation({
    mutationFn: ({ email, password, avatar, major, semester, fullname }) =>
      createUserApi({ email, password, avatar, major, semester, fullname }),

    onSuccess: () => {
      toast.success("successfully created the user");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createUser, isUpdating };
}
