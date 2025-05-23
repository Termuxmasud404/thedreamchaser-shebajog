// pages/Services.jsx
import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'প্লাম্বিং সার্ভিস', description: 'আপনার পানির লিক ঠিক করি', price: 500 },
    { id: 2, name: 'ইলেকট্রিক সার্ভিস', description: 'বিদ্যুৎ সংক্রান্ত কাজ করি', price: 700 },
    { id: 3, name: 'ক্লিনিং সার্ভিস', description: 'বাড়ি অফিস পরিষ্কার করি', price: 300 },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">আমাদের সার্ভিসসমূহ</h2>
      <ul>
        {services.map(service => (
          <li key={service.id} className="border-b py-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <div className="text-indigo-700 font-bold">৳ {service.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
