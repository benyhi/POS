import React from "react";
import CustomTable from '../components/Table'
import InfoCard from "../components/InfoCard";
import theme from '../utils/theme'
import { ThemeProvider, Box, Stack } from "@mui/material";
import Inventory_ico from '../assets/icons/inventory_2_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg'
import Inventory_ico_white from '../assets/icons/inventory_2_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg'

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

const Inventory = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Stack direction="row" ml={2} gap={2}>
          <InfoCard title={"Productos en Stock"} value={200} icon={Inventory_ico} color={"#fff"}/>
          <InfoCard title={"Productos con Bajo Stock"} value={3} icon={Inventory_ico_white} color={theme.palette.primary.warning}/>
        </Stack>
        <Box>
        <CustomTable columns={columns} data={initialRows} options={options}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Inventory;
