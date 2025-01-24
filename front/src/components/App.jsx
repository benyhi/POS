import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar'
import Home from '../views/Home';
import Sale from '../views/Sale';
import Inventory from '../views/Inventory';
import Movements from '../views/Movements';
import Notifications from '../views/Notifications';
import Users from '../views/Users';
import Settings from '../views/Settings';
import Help from '../views/Help';
import Reports from '../views/Reports';

export default function App() {

  return (
    <Router>
      <Navbar />
      <Box sx={{ marginLeft: '60px', marginTop: '64px', padding: '20px' }}>
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
        </Routes>
      </Box>
    </Router>
  );
}

