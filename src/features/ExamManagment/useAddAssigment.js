import { useMutation } from "@tanstack/react-query";
import { addAssigment as addAssigmentApi } from "../../service/assigmentsApi";
import toast from "react-hot-toast";

export function useAddAssigment() {
  const { mutate: addAssigment, isPending: isAdding } = useMutation({
    mutationFn: (assignment) => addAssigmentApi(assignment),

    onSuccess: () => toast.success("succesfully added the assigments"),
    onError: (err) => toast.error(err.message),
  });

  return { addAssigment, isAdding };
}
