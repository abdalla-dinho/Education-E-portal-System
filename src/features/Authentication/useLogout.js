import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../service/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout, isUpdating } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      toast.success("sucessfully loged out");
      navigate("/login");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isUpdating };
}
