import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState({ totalWeight: 0, battery: 0, alert: false });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/status', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(res.data);
    };
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Cargo Weigher Dashboard</h1>
      <div className="text-4xl mb-4">Total Weight: {data.totalWeight} kg</div>
      <div className="text-xl mb-2">Battery: {data.battery}%</div>
      {data.alert && <div className="text-red-600 font-bold">Service Required!</div>}
    </div>
  );
}

export default Dashboard;