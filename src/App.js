import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";
import Requests from "./pages/Requests";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          padding: "10px",
          background: "#eee",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
