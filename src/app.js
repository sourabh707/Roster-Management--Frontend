import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ManagerDashboard from './components/Dashboard/ManagerDashboard';
import StaffDashboard from './components/Dashboard/StaffDashboard';
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';
import Attendance from './components/Dashboard/Attendance';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manager" element={
            <ManagerDashboard />
        } />
        <Route path="/staff" element={
            <StaffDashboard />
        } />
        <Route path="/attendance" element= {
          <Attendance/>
        }/>
      </Routes>
    </Router>
  );
};

export default App;
