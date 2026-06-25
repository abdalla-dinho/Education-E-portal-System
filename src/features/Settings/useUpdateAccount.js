import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAccount as updateAccountApi } from "../../service/settingsApi";
import toast from "react-hot-toast";

export function useUpdateAccount() {
  const queryClient = useQueryClient();
  const { mutate: updateAccount, isPending: isUpdating } = useMutation({
    mutationFn: ({ fullname, avatar }) =>
      updateAccountApi({ fullname, avatar }),

    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("successfully updated the user");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateAccount, isUpdating };
}
