import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${form.name}! (demo only, nothing is saved)`);
  };

  return (
    <AuthLayout
      small="Create an Account"
      title="Sign up and come in"
      bottom="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <h1>Welcome to ByteSpace</h1>
      <form onSubmit={submit}>
        <label>Full Name</label>
        <input name="name" placeholder="Jamie Davis" value={form.name} onChange={change} required />
        <label>Email</label>
        <input name="email" type="email" placeholder="designer@example.com" value={form.email} onChange={change} required />
        <label>Password</label>
        <input name="password" type="password" placeholder="********" value={form.password} onChange={change} required minLength={6} />
        <button className="btn right">Continue</button>
      </form>
      <p className="auth-foot">Already have an account? <Link to="/login">Login</Link></p>
    </AuthLayout>
  );
}