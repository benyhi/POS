import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { TextField, Button, Box, Stack, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Icon } from "@mui/material";
import Add from '../assets/icons/add_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import Edit from '../assets/icons/edit_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import Delete from '../assets/icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import Upload from '../assets/icons/upload_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import Download from '../assets/icons/download_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import Filter from '../assets/icons/filter_alt_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'

import MenuFilter from './FilterMenu'

export default function CustomTable({columns, data, options}) {
  const [rows, setRows] = useState(data);
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState({ id: "", nombre: "", precio: "", stock: "" });
  const [open, setOpen] = useState(false);
  const [filters, setFilters ] = useState([]);

  const handleApplyFilters = (selected) => {
    setFilters(selected);
    console.log("Filtros", selected)
  }

  // Search Filter
    const filteredRows = rows.filter(row =>
      row.nombre.toLowerCase().includes(search.toLowerCase())
    );

  const handleOpen = (row = null) => {
    setSelectedRow(row);
    setFormData(row || { id: "", nombre: "", precio: "", stock: "" });
    setOpen(true);
  };

  const handleSave = () => {
    if (selectedRow) {
      // Editar fila existente
      setRows(rows.map(row => (row.id === selectedRow.id ? formData : row)));
    } else {
      // Agregar nuevo producto
      setRows([...rows, { ...formData, id: rows.length + 1 }]);
    }
    setOpen(false);
  };

  const handleDelete = () => {
    if (selectedRow) {
      setRows(rows.filter(row => row.id !== selectedRow.id));
      setSelectedRow(null);
    }
  };

  return (
    <Box sx={{ height: 500, width: "100%", p: 2 }}>
      {/* Controles arriba */}
      <Stack direction="row" mb={2} justifyContent={"space-between"}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {options?.buttons?.add && (
            <Button sx={{  fontFamily: 'Roboto'}} variant="contained" startIcon={<img src={Add} alt="add_icon" />} onClick={() => handleOpen()}>Agregar</Button>
          )}
          {options?.buttons?.edit && (
            <Button sx={{  fontFamily: 'Roboto'}} variant="contained" startIcon={<img src={Edit} alt="edit_icon" />} disabled={!selectedRow} onClick={() => handleOpen(selectedRow)}>Editar</Button>
          )}
          {options?.buttons?.delete && (
            <Button sx={{  fontFamily: 'Roboto'}} variant="contained" color="error" startIcon={<img src={Delete} alt="delete_icon" />} disabled={!selectedRow} onClick={handleDelete}>Eliminar</Button>
          )}
          {options?.buttons?.import && (
            <Button sx={{  fontFamily: 'Roboto'}} variant="contained" startIcon={<img src={Upload} alt="upload_icon" />} >Importar</Button>
          )}
          {options?.buttons?.export && (
            <Button sx={{  fontFamily: 'Roboto'}} variant="contained" startIcon={<img src={Download} alt="download_icon" />} >Exportar</Button>
          )}
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          {options?.filter && (
            <MenuFilter onApplyFilters={handleApplyFilters}/>
          )}
          {options?.search && (
            <TextField sx={{  width: 300 }} fullWidth label="Buscar por nombre o codigo..." variant="outlined" size="small" onChange={(e) => setSearch(e.target.value)} />
          )}
        </Box>
      </Stack>

      {/* Table */}
      <DataGrid
        sx={{fontFamily: 'Roboto'}}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={filteredRows || null }
        columns={columns}
        pagination
        pageSizeOptions={[5, 10, 25, 50, 100]}
        rowCount={rows.length || 0}
        paginationMode="server"
        onRowSelectionModelChange={(ids) => {
          const selectedId = ids.length ? ids[0] : null;
          setSelectedRow(rows.find(row => row.id === selectedId) || null);
        }}
        checkboxSelection={options?.checkbox}
      />

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{selectedRow ? "Editar Producto" : "Agregar Producto"}</DialogTitle>
        <DialogContent>
          {columns
          .filter(column => column.field !== "id")
          .map(column => (
            <TextField 
              key={column.field.id}
              label={column.field[0].toUpperCase() + column.field.slice(1)}
              fullWidth
              margin="dense"
              value={formData[column.field] || ""}
              onChange={(e) =>
                setFormData({ ...formData, [column.field]: e.target.value })} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} variant="contained">{selectedRow ? "Actualizar" : "Guardar"}</Button>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
