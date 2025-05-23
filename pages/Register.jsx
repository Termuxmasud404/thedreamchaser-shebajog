// pages/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('পাসওয়ার্ড মিলছে না!');
      return;
    }
    alert(`রেজিস্ট্রেশন সফল: ${form.name}`);
    setForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">রেজিস্ট্রেশন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="আপনার নাম"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="পাসওয়ার্ড নিশ্চিত করুন"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          রেজিস্টার
        </button>
      </form>
    </div>
  );
};

export default Register;
