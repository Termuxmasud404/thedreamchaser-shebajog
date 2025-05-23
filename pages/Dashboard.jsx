// pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // ডেমো ইউজার ডাটা
  const [user, setUser] = useState({
    name: 'মাসুদ রানা',
    email: 'masud@example.com',
  });

  // ডেমো বুকিং ডাটা
  const [bookings, setBookings] = useState([
    { id: 1, service: 'প্লাম্বিং সার্ভিস', date: '2025-06-01', status: 'Confirmed' },
    { id: 2, service: 'ক্লিনিং সার্ভিস', date: '2025-06-10', status: 'Pending' },
  ]);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">ড্যাশবোর্ড</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">আপনার প্রোফাইল</h3>
        <p><strong>নাম:</strong> {user.name}</p>
        <p><strong>ইমেইল:</strong> {user.email}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">আপনার বুকিংসমূহ</h3>
        {bookings.length === 0 ? (
          <p>কোন বুকিং পাওয়া যায়নি।</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-100">
                <th className="border border-gray-300 px-4 py-2">সার্ভিস</th>
                <th className="border border-gray-300 px-4 py-2">তারিখ</th>
                <th className="border border-gray-300 px-4 py-2">স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{b.service}</td>
                  <td className="border border-gray-300 px-4 py-2">{b.date}</td>
                  <td className={`border border-gray-300 px-4 py-2 font-semibold ${
                    b.status === 'Confirmed' ? 'text-green-600' :
                    b.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-3">স্ট্যাটিস্টিকস</h3>
        <div className="flex gap-6">
          <div className="bg-indigo-50 p-4 rounded shadow flex-1 text-center">
            <h4 className="text-xl font-bold text-indigo-700">{bookings.length}</h4>
            <p>মোট বুকিং</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded shadow flex-1 text-center">
            <h4 className="text-xl font-bold text-indigo-700">
              {bookings.filter(b => b.status === 'Confirmed').length}
            </h4>
            <p>নিশ্চিত বুকিং</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded shadow flex-1 text-center">
            <h4 className="text-xl font-bold text-indigo-700">
              {bookings.filter(b => b.status === 'Pending').length}
            </h4>
            <p>মুলতুবি বুকিং</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
