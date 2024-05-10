import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AdminPage from "./pages/AdminLoginPage/AdminLoginPage";
import AdminDashPage from "./pages/AdminDashPage/AdminDashPage";
import { useEffect, useState } from "react";

// function RedirectToHomeIfNotAdmin() {
//   const navigate = useNavigate();
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const responseData = localStorage.getItem("responseData");
//     if (responseData) {
//       const { isAdmin } = JSON.parse(responseData);
//       setIsAdmin(isAdmin);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isAdmin) {
//       navigate("/");
//     }
//   }, [navigate, isAdmin]);
  
//   useEffect(() => {
//     if (isAdmin) {
//       navigate("/api/admin-dashboard/achraf0El");
//     }
//   }, [navigate, isAdmin]);

//   return null; // This component doesn't render anything, it just redirects if needed
// }

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const responseData = localStorage.getItem("responseData");
    if (responseData) {
      const { isAdmin } = JSON.parse(responseData);
      setIsAdmin(isAdmin);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectsPage />} />
        <Route
          path="/auth/admin/login"
          element={isAdmin ? <HomePage /> : <AdminPage />}
        />
        <Route
          path="/api/admin-dashboard/achraf0El"
          element={isAdmin ? <AdminDashPage /> : <HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
