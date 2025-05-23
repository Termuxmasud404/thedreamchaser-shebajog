// pages/Booking.jsx
import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const services = [
    'প্লাম্বিং সার্ভিস',
    'ইলেকট্রিক সার্ভিস',
    'ক্লিনিং সার্ভিস',
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} on ${form.date} for ${form.service}`);
    setForm({ name: '', phone: '', service: '', date: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">বুকিং ফর্ম</h2>
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
          type="tel"
          name="phone"
          placeholder="ফোন নম্বর"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">সার্ভিস নির্বাচন করুন</option>
          {services.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          বুকিং করুন
        </button>
      </form>
    </div>
  );
};

export default Booking;
