import { Box,ThemeProvider } from "@mui/material";
import Cart from "../components/sale/Cart"
import ProductList from "../components/sale/ProductList";
import theme from "../utils/theme";


export default function Sale() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: "2fr 1fr",
        gap: 2,
        minHeight: "85vh"
      }}>
        <ProductList/>
        <Cart/>
      </Box>
    </ThemeProvider>
  );
}
