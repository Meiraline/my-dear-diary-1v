import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./05-Pages/AuthPage";
import TasksPage from "./05-Pages/TasksPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}