import { useState } from "react";
import "./AdminLoginPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "") {
      toast.error("email is required!");
    } else if (password === "") {
      toast.error("password is required!");
    } else {
      createUser();
    }
  };

  const createUser = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://achraf-portfolio.onrender.com/api/auth/admin-login",
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("responseData", JSON.stringify(res.data));
      setTimeout(() => navigate("/api/admin-dashboard/achraf0El"), 2000);
      toast.success("your logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login__form">
      <div className="login__container">
        <h1 className="primary__title">Admin Login</h1>
        <div className="login__inputs">
          <input
            type="email"
            value={email}
            placeholder="admin@email.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="***********"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn login__btn color__primary"
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Login
        </button>
      </div>

      <ToastContainer position="top-center" />
    </form>
  );
}

export default AdminPage;
