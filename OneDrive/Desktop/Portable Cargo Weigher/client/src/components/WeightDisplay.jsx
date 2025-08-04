import React, { useEffect, useState } from "react";

export default function WeightDisplay({ onLogout }) {
const [data, setData] = useState({
vehicleId: "",
numberPlate: "",
ownerName: "",
driverName: "",
weight: 0,
timestamp: ""
});

const fetchData = async () => {
try {
const res = await fetch("http://192.168.4.1/api/weight"); // Replace with your ESP32 IP
const json = await res.json();
setData(json);
} catch (err) {
console.error("Error fetching data from ESP32:", err);
}
};

useEffect(() => {
fetchData(); // Initial fetch
const interval = setInterval(fetchData, 2000); // Update every 2s
return () => clearInterval(interval);
}, []);

return (
<div className="min-h-screen p-6 flex flex-col items-center bg-white text-gray-900">
<h1 className="text-3xl font-bold mb-6">Cargo Weight Monitoring</h1>
<div className="grid gap-4 border rounded-lg shadow-lg p-6 w-full max-w-xl">
<div><strong>Vehicle ID:</strong> {data.vehicleId}</div>
<div><strong>Number Plate:</strong> {data.numberPlate}</div>
<div><strong>Owner Name:</strong> {data.ownerName}</div>
<div><strong>Driver Name:</strong> {data.driverName}</div>
<div><strong>Date & Time:</strong> {new Date(data.timestamp).toLocaleString()}</div>
<div className="text-2xl mt-4"><strong>Load Weight:</strong> {data.weight} kg</div>
</div>
<button onClick={onLogout} className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg">
Logout
</button>
</div>
);
}