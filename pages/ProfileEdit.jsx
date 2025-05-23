// pages/ProfileEdit.jsx
import React, { useState } from 'react';

const ProfileEdit = () => {
  const [form, setForm] = useState({
    name: 'মাসুদ রানা',
    email: 'masud@example.com',
    phone: '017XXXXXXXX',
    address: 'ঢাকা, বাংলাদেশ',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('প্রোফাইল সফলভাবে আপডেট হয়েছে!');
    // এখানে API কল বা ডাটাবেস আপডেট করতে হবে
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">প্রোফাইল সম্পাদনা</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="নাম"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="ইমেইল"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="ফোন নাম্বার"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="ঠিকানা"
          value={form.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          আপডেট করুন
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
