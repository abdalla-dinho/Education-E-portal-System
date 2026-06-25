import { useNavigate } from "react-router";
import { useUser } from "../features/Authentication/useUser";
import SpinnerFull from "./SpinnerFull";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <SpinnerFull />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
