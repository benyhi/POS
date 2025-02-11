import { useState } from "react";
import { Box, Button, MenuItem, Select, TextField, Typography, ThemeProvider } from "@mui/material";
import theme from '../utils/theme'

const ReportView = () => {
  const [reportType, setReportType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [format, setFormat] = useState("");

  const handleGenerate = () => {
    if (!reportType || !startDate || !endDate || !format) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    console.log(reportType, startDate, endDate, format)
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}>
        <Typography variant="h5">Generar Reporte</Typography>
        
        <Select value={reportType} onChange={(e) => setReportType(e.target.value)} displayEmpty>
          <MenuItem value="" disabled>Seleccionar tipo de reporte</MenuItem>
          <MenuItem value="ventas">Ventas</MenuItem>
          <MenuItem value="productos">Productos</MenuItem>
          <MenuItem value="clientes">Clientes</MenuItem>
        </Select>

        <TextField label="Fecha Inicio" type="date" slotProps={{ inputLabel: { shrink: true } }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <TextField label="Fecha Fin" type="date" slotProps={{ inputLabel: { shrink: true } }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <Select value={format} onChange={(e) => setFormat(e.target.value)} displayEmpty>
          <MenuItem value="" disabled>Seleccionar formato</MenuItem>
          <MenuItem value="pdf">PDF</MenuItem>
          <MenuItem value="excel">Excel</MenuItem>
          <MenuItem value="csv">CSV</MenuItem>
        </Select>

        <Button variant="contained" onClick={handleGenerate}>Generar Reporte</Button>
      </Box>
    </ThemeProvider>
  );
};

export default ReportView;
