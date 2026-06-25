import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../service/settingsApi";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { mutate: updatePassword, isPending: isUpdating } = useMutation({
    mutationFn: (password) => updatePasswordApi({ password }),

    onSuccess: () => {
      toast.success("successfully updated the password");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updatePassword, isUpdating };
}
