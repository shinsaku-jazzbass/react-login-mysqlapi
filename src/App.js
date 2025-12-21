import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
//import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App
