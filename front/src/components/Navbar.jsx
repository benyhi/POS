import React, { useState } from 'react';
import { 
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  Icon,
} from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '../utils/theme';
import Menu from '../assets/icons/menu_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg';
import BackArrow from '../assets/icons/arrow_back_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg';
import Home from '../assets/icons/home_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Sale from '../assets/icons/paid_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Inventory from '../assets/icons/inventory_2_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Movements from '../assets/icons/list_alt_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Notifications from '../assets/icons/notifications_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Users from '../assets/icons/group_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Settings from '../assets/icons/settings_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Help from '../assets/icons/help_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';

const itemsTop = [
  {id: 1, icon: Home, text: 'Inicio', path: '/'},
  {id: 2, icon: Sale, text: 'Vender', path: '/sale'},
  {id: 3, icon: Inventory, text: 'Inventario',  path: '/inventory'},
  {id: 4, icon: Movements, text: 'Movimientos', path: '/movements'},
  {id: 5, icon: Notifications, text: 'Notificaciones', path: '/notifications'},
  {id: 6, icon: Users, text: 'Usuarios', path: '/users'},
]

const itemsBottom = [
  {id: 1, icon: Settings, text: 'Configuración', path: '/settings'},
  {id: 2, icon: Help, text: 'Ayuda', path: '/help'},
]

const drawerWidth = 200;

const DrawerItem = ({ icon, text, path, open }) => (
  <ListItem disablePadding>
    <ListItemButton 
      component={Link}
      to={path}
      sx={{
        padding: '10px'
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} 
      >
        <img src={icon} alt="icon" style={{ width: '32px', height: '32px'}}/>
      </ListItemIcon>
      {open && <ListItemText primary={text} style={{ marginLeft: '10px'}} />}
    </ListItemButton>
  </ListItem>
);


export default function Navbar() {
  
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* Top AppBar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, mb: 1}}
            >
              <Icon>
                <img src={open ? BackArrow : Menu} alt="menu" style={{ width: '28px', height: '28px' }} />
              </Icon>
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
              Punto de Venta
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Side Drawer */}
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: open ? drawerWidth : 60,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: open ? drawerWidth : 60,
              transition: 'width 0.3s',
              overflowX: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          }}
        >
          {/* Top Drawer Items */}
          <Box
            sx={{ marginTop: '56px' }}
          >
            <List>
              {itemsTop.map((item) => (
                <DrawerItem key={item.id} icon={item.icon} text={item.text} open={open} />
              ))}
            </List>
          </Box>
          {/* Bottom Drawer Items */}
          <Box>
            <List>
              {itemsBottom.map((item) => (
                <DrawerItem key={item.id} icon={item.icon} text={item.text} open={open} />
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
