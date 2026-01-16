import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout2 from "./components/Logout2";
import Dashboard2 from "./components/Dashboard2";
import Login2 from "./components/Login2";
import UserProfile from "./components/UserProfile";
import kansu_test01 from "./components/kansu_test01";
import User from "./components/User";
//import './App.css';
 
function App() {

  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard2" element={<Protected Component={Dashboard2} />} />
        <Route path="/logout" element={<Logout2 />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login2" element={<Login2 data={'data'} />} />
      </Routes>
    </BrowserRouter>


  );
}
 
export default App
