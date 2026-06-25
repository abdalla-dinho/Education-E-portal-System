import { useMutation } from "@tanstack/react-query";
import { addExams as addExamsApi } from "../../service/examsApi";
import toast from "react-hot-toast";

export function useAddExams() {
  const { mutate: addExams, isPending: isAdding } = useMutation({
    mutationFn: (exam) => addExamsApi(exam),
    mutationKey: ["addExams"],

    onSuccess: () => toast.success("successfully Added to the Exams "),
    onError: (err) => toast.error(err.message),
  });

  return { addExams, isAdding };
}
