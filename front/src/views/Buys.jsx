import React from "react";
import { Box, ThemeProvider } from '@mui/material'
import CustomTable from '../components/Table'
import theme from '../utils/theme'

const initialRows = [
    { id: 1, nombre: "Producto A", precio: 100, stock: 10 },
    { id: 2, nombre: "Producto B", precio: 200, stock: 5 },
    { id: 3, nombre: "Producto C", precio: 150, stock: 8 },
    { id: 4, nombre: "Producto D", preico: 200, stock: 2 },
  ];
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "precio", headerName: "Precio ($)", width: 120, type: "number" },
    { field: "stock", headerName: "Stock", width: 100, type: "number" },
  ];
  
  const options = {
    buttons:{
      edit: true,
      delete: true,
      add: true,
      import: true,
      export: true
    },
    filter: true,
    search: true,
    checkbox: true
  }
  
const Buys = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box>
            <Box>
                <CustomTable columns={columns} data={initialRows} options={options}/>
            </Box>
        </Box>
    </ThemeProvider>
  );
};

export default Buys;
