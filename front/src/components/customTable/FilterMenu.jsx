import React, { useState } from "react";
import { Menu, MenuItem, Checkbox, ListItemText, IconButton, Icon } from "@mui/material";
import Filter from '../../assets/icons/filter_alt_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg'

const filters = [
  { id: "precio", nombre: "Precio" },
  { id: "categoria", nombre: "Categoría" },
  { id: "disponible", nombre: "Disponible" },
  { id: "marca", nombre: "Marca" },
];

function FilterMenu({ onApplyFilters }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (id) => {
    setSelectedFilter((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const applyFilter = () => {
    onApplyFilters(selectedFilter); // Enviar filtros seleccionados al padre
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Icon>
            <img src={Filter} alt="filter_icon" />
        </Icon>
      </IconButton>
      
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {filters.map((filter) => (
          <MenuItem key={filter.id} onClick={() => handleToggle(filter.id)}>
            <Checkbox checked={selectedFilter.includes(filter.id)} />
            <ListItemText primary={filter.nombre} />
          </MenuItem>
        ))}
        <MenuItem onClick={applyFilter} style={{ color: "#666666" }}>
          Aplicar Filtros
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FilterMenu;
