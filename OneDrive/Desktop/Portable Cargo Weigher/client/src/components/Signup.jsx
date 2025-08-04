import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vehicleId: '',
    vehicleName: '',
    numberPlate: '',
    driverName: '',
    ownerName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Form Data Submitted:', formData);
    alert('Signup Successful');
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Vehicle Owner Signup
        </h2>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'Vehicle ID', name: 'vehicleId' },
            { label: 'Vehicle Name', name: 'vehicleName' },
            { label: 'Number Plate', name: 'numberPlate' },
            { label: 'Driver Name', name: 'driverName' },
            { label: 'Owner Name', name: 'ownerName' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Password', name: 'password', type: 'password' },
            { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
          ].map(({ label, name, type = 'text' }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                required
                value={formData[name]}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              rows="2"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-center">
            Already have an account?{' '}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
