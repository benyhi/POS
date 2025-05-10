import React from "react";
import CustomTable from '@/components/customTable/CustomTable'
import { Box } from "@mui/material";

const initialRows = [
  { id: 1, nombre: "Cliente A", precio: 100, stock: 10 },
  { id: 2, nombre: "Cliente B", precio: 200, stock: 5 },
  { id: 3, nombre: "Cliente C", precio: 150, stock: 8 },
  { id: 4, nombre: "Cliente D", preico: 200, stock: 2 },
];

const columns = [
  { field: "nombre", headerName: "Nombre", flex: 1 },
  { field: "precio", headerName: "Precio ($)", width: 120, type: "number" },
  { field: "stock", headerName: "Stock", width: 100, type: "number" },
];

const options = {
  buttons:{
    edit: true,
    delete: true,
    add: true,
    import: false,
    export: true
  },
  filter: false,
  search: true,
  checkbox: true
}

const UsersView = () => {
  return (
    <Box>
      <Box>
        <CustomTable columns={columns} data={initialRows} options={options} />
      </Box>
    </Box>
  );
};

export default UsersView;
