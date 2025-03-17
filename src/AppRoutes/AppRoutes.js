import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import LandingPage from '../Pages/LandingPage';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';
import Course from '../Pages/Course';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes (No Layout) */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    
      {/* Protected Routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<Course />} />
      </Route>
    </Routes>
  );
};


// <Routes>
// {/* Public routes without layout */}
// <Route path="/" element={<LandingPage />} />
// <Route path="/login" element={<LoginPage />} />
// <Route path="/signup" element={<SignupPage />} />
// <Route path="/dashboard" element={<Dashboard/>} />
//   <Route path="/course" element={<Course/>} />

// {/* Routes with Layout */}
// <Route element={<Layout />}>
 
//   <Route path="/dashboard" element={<Dashboard/>} />
//   <Route path="/course" element={<Course/>} />
// </Route>
// </Routes>