// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16 p-6 bg-white rounded shadow">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">ড্যাশবোর্ড</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Link
          to="/services"
          className="p-8 bg-indigo-100 rounded hover:bg-indigo-200 transition shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">সার্ভিস লিস্ট</h2>
          <p>সার্ভিস অ্যাড, এডিট ও ডিলিট করুন</p>
        </Link>

        <Link
          to="/bookings"
          className="p-8 bg-indigo-100 rounded hover:bg-indigo-200 transition shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">বুকিং লিস্ট</h2>
          <p>আপনার বুকিং গুলো দেখুন ও ম্যানেজ করুন</p>
        </Link>

        <Link
          to="/profile-edit"
          className="p-8 bg-indigo-100 rounded hover:bg-indigo-200 transition shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">প্রোফাইল এডিট করুন</h2>
          <p>আপনার তথ্য পরিবর্তন করুন</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
