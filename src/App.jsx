import Login from "./Pages/Login";
import GlobalStyles from "./styles/globolStyles";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
// import Home from "./Pages/Home";
import Portal from "./Pages/Portal";
import Courses from "./Pages/Courses";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ProtectedRoute from "./UI/ProtectedRoute";
import Exam from "./Pages/Exam";
import Settings from "./Pages/Settings";
import { Toaster } from "react-hot-toast";
import User from "./Pages/User";
import ExamMangment from "./Pages/ExamMangment";
import Dashboard from "./Pages/Dashboard";
import Financial from "./Pages/Financial";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error(query.meta.errorMessage);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Toaster
        position="top-center"
        duration={400}
        toastOptions={{
          style: {
            padding: "1rem 1rem",
            gap: "0.7rem",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="portal" element={<Portal />}>
              <Route index element={<Navigate to="settings" replace />} />
              <Route path="charts" element={<Dashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="exams" element={<Exam />} />
              <Route path="settings" element={<Settings />} />
              <Route path="user" element={<User />} />
              <Route path="Exammanagment" element={<ExamMangment />} />
              <Route path="Financial" element={<Financial />} />
            </Route>
            <Route index element={<Navigate to="portal" replace />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
   