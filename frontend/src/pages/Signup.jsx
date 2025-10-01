import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../lib/axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      toast.success("Account created successfully");
      navigate("/login"); 
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md space-y-6 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Welcome to LumenLog</h1>
          <p className="text-base-content mt-2">
            A space to gather your thoughts, unwind and reset.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card shadow-xl bg-base-100 p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-primary">Create Account</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered w-full"
            value={form.username}
            onChange={handleChange}
            required
          />

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

          <button type="submit" className="btn btn-primary w-full">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
