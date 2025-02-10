import React from "react";
import CustomTable from "../components/Table";
import { Box } from "@mui/material";

const initialRows = [
  { id: 1, nombre: "Ingreso mercaderia", precio: 100, tipo:"Compra", stock: 500 },
  { id: 2, nombre: "Venta al contado", precio: 200, tipo:"Venta", stock: 5 },
  { id: 3, nombre: "Venta con tarjeta", precio: 150, tipo:"Venta", stock: 8 },
  { id: 4, nombre: "Compra Masias Bagley", preico: 150, tipo:"Compra", stock: 2 },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "nombre", headerName: "Nombre", flex: 1 },
  { field: "tipo", headerName: "Tipo"},
  { field: "precio", headerName: "Precio ($)", width: 120, type: "number" },
  { field: "cantidad", headerName: "Stock", width: 100, type: "number" },
];

const Movements = () => {
  return (
    <Box>
      <CustomTable columns={columns} data={initialRows}/>
    </Box>
  );
};

export default Movements;
