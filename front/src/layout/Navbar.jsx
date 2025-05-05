import React from 'react';
import { 
  Drawer,
  List,
  IconButton,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  Icon,
} from '@mui/material';
import { useNavbarStore } from '../store';
import DrawerItem from './DrawerItem';
import theme from '../utils/theme';
import Menu from '../assets/icons/menu_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg';
import BackArrow from '../assets/icons/arrow_back_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg';
import Home from '../assets/icons/home_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Sale from '../assets/icons/paid_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Inventory from '../assets/icons/inventory_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg'
import ProductsIcon from '../assets/icons/inventory_2_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import CategoryIcon from '../assets/icons/category_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg'
import Movements from '../assets/icons/list_alt_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Purchases from '../assets/icons/shopping_cart_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg'
import Sales from '../assets/icons/payments_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg'
import Notifications from '../assets/icons/notifications_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Users from '../assets/icons/person_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg'
import Clients from '../assets/icons/groups_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Settings from '../assets/icons/settings_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Help from '../assets/icons/help_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';
import Reports from '../assets/icons/partner_reports_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg';

const itemsTop = [
  {id: 1, icon: Home, text: 'Inicio', path: '/home'},
  {id: 2, icon: Sale, text: 'Vender', path: '/sale'},
  {id: 3, icon: Inventory, text: 'Inventario',  path: '/inventory',
    items:
    [
      {title: 'Productos', icon: ProductsIcon, path: '/inventory/products'},
      {title: 'Categorias', icon: CategoryIcon, path: '/inventory/categories'}
    ]
  },
  {id: 4, icon: Movements, text: 'Movimientos', path: '/movements',
    items: 
    [
      {title: 'Compras', icon: Purchases, path: '/movements/purchases'},
      {title: 'Ventas', icon: Sales, path: '/movements/sales'}
    ]
  },
  {id: 5, icon: Clients, text: 'Clientes', path: '/customers'},
  {id: 6, icon: Users, text: 'Usuarios', path: '/users'},
  {id: 7, icon: Notifications, text: 'Notificaciones', path: '/notifications'},
  {id: 8, icon: Reports, text: 'Reportes', path: '/reports'},
]

const itemsBottom = [
  {id: 1, icon: Settings, text: 'Configuración', path: '/settings'},
  {id: 2, icon: Help, text: 'Ayuda', path: '/help-info'},
]

export default function Navbar() {
  
  const { isNavbarOpen, drawerWidth, toggleNavbar } = useNavbarStore();

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
              onClick={toggleNavbar}
              sx={{ mr: 2, mb: 1}}
            >
              <Icon>
                <img src={isNavbarOpen ? BackArrow : Menu} alt="menu" style={{ width: '28px', height: '28px' }} />
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
          open={isNavbarOpen}
          sx={{
            width: isNavbarOpen ? drawerWidth : 60,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: isNavbarOpen ? drawerWidth : 60,
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
                <DrawerItem key={item.id} icon={item.icon} text={item.text} path={item.path} items={item.items} open={isNavbarOpen} />
              ))}
            </List>
          </Box>
          {/* Bottom Drawer Items */}
          <Box>
            <List>
              {itemsBottom.map((item) => (
                <DrawerItem key={item.id} icon={item.icon} text={item.text} path={item.path} open={isNavbarOpen} />
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
