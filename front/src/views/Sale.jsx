import React, { useState } from "react";
import { 
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  ThemeProvider} 
from "@mui/material";
import theme from "../utils/theme";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Sale() {

  const [cart, setCart] = useState([
    { id: 1, name: "Producto Uno", quantity: 3, price: 7100, image: "../assets/images/coca_lata.png" },
    { id: 2, name: "Producto Dos", quantity: 1, price: 4300, image: "../assets/images/coca_lata.png" },
    { id: 3, name: "Producto Tres", quantity: 6, price: 5400, image: "../assets/images/coca_lata.png" },
    { id: 4, name: "Producto Cuatro", quantity: 2, price: 3200, image: "../assets/images/coca_lata.png" },
    { id: 5, name: "Producto Cinco", quantity: 5, price: 8100, image: "../assets/images/coca_lata.png" },
    { id: 6, name: "Producto Seis", quantity: 4, price: 6400, image: "../assets/images/coca_lata.png" },
    { id: 7, name: "Producto Siete", quantity: 7, price: 9100, image: "../assets/images/coca_lata.png" },
    { id: 8, name: "Producto Ocho", quantity: 8, price: 10200, image: "../assets/images/coca_lata.png" },
    { id: 9, name: "Producto Nueve", quantity: 9, price: 11300, image: "../assets/images/coca_lata.png" },
    { id: 10, name: "Producto Diez", quantity: 10, price: 12400, image: "../assets/images/coca_lata.png" },
    { id: 11, name: "Producto Once", quantity: 11, price: 13500, image: "../assets/images/coca_lata.png" },
    { id: 12, name: "Producto Doce", quantity: 12, price: 14600, image: "../assets/images/coca_lata.png" },
    { id: 13, name: "Producto Trece", quantity: 13, price: 15700, image: "../assets/images/coca_lata.png" },
    { id: 14, name: "Producto Catorce", quantity: 14, price: 16800, image: "../assets/images/coca_lata.png" },
    { id: 15, name: "Producto Quince", quantity: 15, price: 17900, image: "../assets/images/coca_lata.png" },
    { id: 16, name: "Producto Dieciseis", quantity: 16, price: 19000, image: "../assets/images/coca_lata.png" },
    { id: 17, name: "Producto Diecisiete", quantity: 17, price: 20100, image: "../assets/images/coca_lata.png" },
    { id: 18, name: "Producto Dieciocho", quantity: 18, price: 21200, image: "../assets/images/coca_lata.png" },
    { id: 19, name: "Producto Diecinueve", quantity: 19, price: 22300, image: "../assets/images/coca_lata.png" },
    { id: 20, name: "Producto Veinte", quantity: 20, price: 23400, image: "../assets/images/coca_lata.png" },
  ]);

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const items = [
    { id: 1, name: "Producto Uno", quantity: 3, price: 7100, image: "../assets/images/coca_lata.png" },
    { id: 2, name: "Producto Dos", quantity: 1, price: 4300, image: "../assets/images/coca_lata.png" },
    { id: 3, name: "Producto Tres", quantity: 6, price: 5400, image: "../assets/images/coca_lata.png" },
    { id: 4, name: "Producto Cuatro", quantity: 2, price: 3200, image: "../assets/images/coca_lata.png" },
    { id: 5, name: "Producto Cinco", quantity: 5, price: 8100, image: "../assets/images/coca_lata.png" },
    { id: 6, name: "Producto Seis", quantity: 4, price: 6400, image: "../assets/images/coca_lata.png" },
    { id: 7, name: "Producto Siete", quantity: 7, price: 9100, image: "../assets/images/coca_lata.png" },
    { id: 8, name: "Producto Ocho", quantity: 8, price: 10200, image: "../assets/images/coca_lata.png" },
    { id: 9, name: "Producto Nueve", quantity: 9, price: 11300, image: "../assets/images/coca_lata.png" },
    { id: 10, name: "Producto Diez", quantity: 10, price: 12400, image: "../assets/images/coca_lata.png" },
    { id: 11, name: "Producto Once", quantity: 11, price: 13500, image: "../assets/images/coca_lata.png" },
    { id: 12, name: "Producto Doce", quantity: 12, price: 14600, image: "../assets/images/coca_lata.png" },
    { id: 13, name: "Producto Trece", quantity: 13, price: 15700, image: "../assets/images/coca_lata.png" },
    { id: 14, name: "Producto Catorce", quantity: 14, price: 16800, image: "../assets/images/coca_lata.png" },
    { id: 15, name: "Producto Quince", quantity: 15, price: 17900, image: "../assets/images/coca_lata.png" },
    { id: 16, name: "Producto Dieciseis", quantity: 16, price: 19000, image: "../assets/images/coca_lata.png" },
    { id: 17, name: "Producto Diecisiete", quantity: 17, price: 20100, image: "../assets/images/coca_lata.png" },
    { id: 18, name: "Producto Dieciocho", quantity: 18, price: 21200, image: "../assets/images/coca_lata.png" },
    { id: 19, name: "Producto Diecinueve", quantity: 19, price: 22300, image: "../assets/images/coca_lata.png" },
    { id: 20, name: "Producto Veinte", quantity: 20, price: 23400, image: "../assets/images/coca_lata.png" },
  ];


  const ProductCard = ({ item }) => (
    <Card key={item.id} sx={{ maxWidth: 200 }}>
      <CardMedia 
        component="img"
        alt="product"
        height="140"
        image={item.image}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2">
          Cod. {item.id}
        </Typography>
        <Typography variant="body2">
          ${item.price}
        </Typography>
        <Typography variant="body2" color={item.quantity<= 3 ? "red" : "color.primary"}>
          Quantity available: {item.quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Agregar</Button>
      </CardActions>
    </Card>
  )

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", gap: 2, padding: 2 }}>
        {/* Productos */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Productos
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Buscar por código o nombre del producto..."
            fullWidth
            sx={{ mb: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              overflowY: "scroll",
              maxHeight: "calc(100vh - 260px)",
              gap: 1,
            }}
          >
            {items.map((item) => (
              ProductCard({ item })
            ))}
        </Box>
      </Box>

        {/* Carrito */}
        <Box sx={{ flex: 1, border: "1px solid #ccc", borderRadius: 2, padding: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Carrito
          </Typography>
          <Button variant="outlined" color="error" fullWidth>
            Vaciar Carrito
          </Button>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ minHeight: '100px' ,maxHeight: "calc(100vh - 500px)", overflowY: "scroll" }}>
            {cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 0.5,
                }}
              >
                <Typography>
                  {item.name} x{item.quantity}
                </Typography>
                <Typography>${item.quantity * item.price}</Typography>
                <IconButton color="error" onClick={() => handleRemoveItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" align="right" sx={{ mb: 2 }}>
            Total: ${total}
          </Typography>
          <Button variant="contained" color="success" fullWidth>
            Cobrar
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
