import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Home from '../views/Home';
import Sale from '../views/Sale';
import Inventory from '../views/Inventory';
import Movements from '../views/Movements';
import Notifications from '../views/Notifications';
import Users from '../views/Users';
import Settings from '../views/Settings';
import Help from '../views/Help';
import Reports from '../views/Reports';
import Login from '../views/Login';

import { useNavbarStore } from '../store';

// Component that renders the main layout of the app
function AppLayout() {
  const { isNavbarOpen, drawerWidth } = useNavbarStore();
  const location = useLocation();

  // Show navbar only if the current path is not '/login'
  const shouldShowNavbar = location.pathname !== '/login';

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Box
        sx={{
          marginLeft: shouldShowNavbar ? (isNavbarOpen ? `${drawerWidth}px` : '60px') : '0px',
          marginTop: shouldShowNavbar ? '64px' : '0px',
          padding: shouldShowNavbar ? '20px' : '0px',
          transition: 'margin-left 0.3s',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/movements" element={<Movements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </>
  );
}

// Primary component with Router
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
