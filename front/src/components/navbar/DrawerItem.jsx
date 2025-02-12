import React, { useState } from 'react';
import { 
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDropDown from '../../assets/icons/arrow_drop_down_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg'
import ArrowDropUp from '../../assets/icons/arrow_drop_up_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg'

const DrawerItem = ({ icon, text, path, items, open }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleClick = () => {
    if (items) {
      setOpenSubmenu(!openSubmenu);
    }
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton 
          component={items ? 'button' : Link}
          to={items ? undefined : path}
          onClick={handleClick}
          sx={{
            padding: '10px', height: '50px'
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} 
          >
            <img src={icon} alt="icon" style={{ width: '28px', height: '28px',}}/>
          </ListItemIcon>
          {open && <ListItemText primary={text} style={{ marginLeft: '10px'}} />}
          {open && items && (openSubmenu ? <img src={ArrowDropUp}/> : <img src={ArrowDropDown}/> )}
        </ListItemButton>
      </ListItem>
      
      {/* Submenu */}
      {items && (
        <Collapse in={openSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((child, key) => (
              <ListItemButton 
                key={key} 
                component={Link} 
                to={child.path}
                sx={{ pl: open ? 4 : 2 }}
              >
                <ListItemIcon>
                  <img src={child.icon} alt="icon" style={{ width: '24px', height: '24px'}}/>
                </ListItemIcon>
                <ListItemText primary={child.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default DrawerItem;