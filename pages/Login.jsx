// pages/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`লগইন সফল: ${form.email}`);
    setForm({ email: '', password: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">লগইন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="ইমেইল লিখুন"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="পাসওয়ার্ড লিখুন"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          লগইন
        </button>
      </form>
    </div>
  );
};

export default Login;
