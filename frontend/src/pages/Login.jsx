import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../lib/axios"; 
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      toast.success("Welcome back");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md space-y-6 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Welcome back to LumenLog</h1>
          <p className="text-base-content mt-2">
            Your thoughts belong here. Sign in to continue your journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card shadow-xl bg-base-100 p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-primary">Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>

          <div className="divider">or</div>

          <p className="text-sm text-base-content text-center">
            New here?{" "}
            <Link
              to="/signup"
              className="text-primary underline hover:text-accent transition-colors"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
