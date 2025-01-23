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
import theme from '../utils/theme';

import Menu from '../assets/icons/menu_24dp_FFFFFF_FILL0_wght200_GRAD0_opsz24.svg';
import BackArrow from '../assets/icons/arrow_back_24dp_FFFFFF_FILL0_wght200_GRAD0_opsz24.svg';
import Home from '../assets/icons/home_24dp_000000_FILL0_wght200_GRAD0_opsz24.svg';
import Inventory from '../assets/icons/inventory_2_24dp_000000_FILL0_wght200_GRAD0_opsz24.svg';
import History from '../assets/icons/receipt_long_24dp_000000_FILL0_wght200_GRAD0_opsz24.svg';
import Notificatios from '../assets/icons/notifications_24dp_000000_FILL0_wght200_GRAD0_opsz24.svg';
import Sale from '../assets/icons/point_of_sale_32dp_000000_FILL0_wght200_GRAD0_opsz40.svg';

const drawerWidth = 240;

export default function ResponsiveNavbar() {
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
                sx={{ mr: 2, mb: 1 }}
            >
                <Icon>
                    <img src={ open ? BackArrow : Menu } alt="menu" style={{ width: '32px', height: '32px' }} />
                </Icon>
            </IconButton>
            <Typography variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: 'Poppins' , fontWeight: 500 }}
                > 
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
            },
            }}
        >
            <Toolbar />
            <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <Icon>
                        <img src={Home} alt="home" style={{ width: '28px', height: '28px' }} />
                    </Icon>    
                </ListItemIcon>
                {open && <ListItemText primary="Inicio" />}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <Icon>
                        <img src={Inventory} alt="invetory" style={{ width: '28px', height: '28px' }} />
                    </Icon>
                </ListItemIcon>
                {open && <ListItemText primary="Inventario" />}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <Icon>
                        <img src={History} alt="history" style={{ width: '28px', height: '28px' }} />
                    </Icon>
                </ListItemIcon>
                {open && <ListItemText primary="Moviminetos" />}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <Icon>
                        <img src={Notificatios} alt="notifications" style={{ width: '28px', height: '28px' }} />
                    </Icon>
                </ListItemIcon>
                {open && <ListItemText primary="Notificaciones" />}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <Icon>
                        <img src={Sale} alt="sale" style={{ width: '28px', height: '28px' }} />
                    </Icon>
                </ListItemIcon>
                {open && <ListItemText primary="Vender" />}
                </ListItemButton>
            </ListItem>
            </List>
        </Drawer>

        {/* Main Content */}
        <Box
            component="main"
            sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: open ? drawerWidth : 60,
            transition: 'margin-left 0.3s',
            }}
        >
            <Toolbar />
            <Typography paragraph>
            Aquí está el contenido principal de la aplicación.
            </Typography>
        </Box>
        </Box>
    </ThemeProvider>
  );
}
