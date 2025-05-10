import Navbar from './Navbar'; 
import { useNavbarStore } from '../store';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const MainLayout = () => {
  const { isNavbarOpen, drawerWidth } = useNavbarStore();
  
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginLeft: isNavbarOpen ? `${drawerWidth}px` : '60px',
          marginTop: '64px',
          padding: '20px',
          transition: 'margin-left 0.3s',
        }}
      >
        <Outlet /> {/* Here render the children Routes. for example /products or /clients */}
      </Box>
    </>
  );
};

export default MainLayout;