import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    alert("Logged in! (demo only)");
  };

  return (
    <AuthLayout
      small="Welcome back"
      title="Log in and keep learning"
      bottom="Pick up right where you left off and continue your learning journey."
    >
      <h1>Login to ByteSpace</h1>
      <form onSubmit={submit}>
        <label>Email</label>
        <input name="email" type="email" placeholder="designer@example.com" value={form.email} onChange={change} required />
        <label>Password</label>
        <input name="password" type="password" placeholder="********" value={form.password} onChange={change} required />
        <button className="btn right">Continue</button>
      </form>
      <p className="auth-foot">New here? <Link to="/signup">Create an account</Link></p>
    </AuthLayout>
  );
}