import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WeightDisplay from "./components/WeightDisplay";

export default function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
const auth = localStorage.getItem("auth");
setIsAuthenticated(auth === "true");
}, []);

const handleLogin = () => {
localStorage.setItem("auth", "true");
setIsAuthenticated(true);
};

const handleLogout = () => {
localStorage.removeItem("auth");
setIsAuthenticated(false);
};

return (
<Router>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login onLogin={handleLogin} />} />
<Route path="/signup" element={<Signup onSignup={handleLogin} />} />
<Route
path="/weight"
element={
isAuthenticated ? (
<WeightDisplay onLogout={handleLogout} />
) : (
<Navigate to="/login" />
)
}
/>
</Routes>
</Router>
);
}