// pages/ServiceListManagement.jsx
import React, { useState } from 'react';

const ServiceListManagement = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'প্লাম্বিং সার্ভিস', description: 'পানির লিক ঠিক করা', price: 500 },
    { id: 2, name: 'ক্লিনিং সার্ভিস', description: 'বাড়ি পরিষ্কার করা', price: 1000 },
  ]);
  const [form, setForm] = useState({ id: null, name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.description || !form.price) {
      alert('সব ফিল্ড পূরণ করুন');
      return;
    }
    const newService = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
    };
    setServices([...services, newService]);
    setForm({ id: null, name: '', description: '', price: '' });
  };

  const handleEdit = (service) => {
    setForm(service);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setServices(
      services.map(s =>
        s.id === form.id ? { ...s, name: form.name, description: form.description, price: parseFloat(form.price) } : s
      )
    );
    setForm({ id: null, name: '', description: '', price: '' });
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('আপনি কি নিশ্চিত?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">সার্ভিস লিস্ট ম্যানেজমেন্ট</h2>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="সার্ভিস নাম"
          value={form.name}
          onChange={handleChange}
          className="px-3 py-2 border rounded mr-2"
        />
        <input
          type="text"
          name="description"
          placeholder="বর্ণনা"
          value={form.description}
          onChange={handleChange}
          className="px-3 py-2 border rounded mr-2"
        />
        <input
          type="number"
          name="price"
          placeholder="মূল্য (৳)"
          value={form.price}
          onChange={handleChange}
          className="px-3 py-2 border rounded mr-2 w-24"
        />
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            আপডেট করুন
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            নতুন সার্ভিস অ্যাড করুন
          </button>
        )}
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 px-4 py-2">নাম</th>
            <th className="border border-gray-300 px-4 py-2">বর্ণনা</th>
            <th className="border border-gray-300 px-4 py-2">মূল্য (৳)</th>
            <th className="border border-gray-300 px-4 py-2">অ্যাকশন</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{service.name}</td>
              <td className="border border-gray-300 px-4 py-2">{service.description}</td>
              <td className="border border-gray-300 px-4 py-2">{service.price}</td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                >
                  এডিট
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
                >
                  ডিলিট
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceListManagement;
