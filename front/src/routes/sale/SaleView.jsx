import { Box,ThemeProvider } from "@mui/material";
import Cart from "./components/Cart"
import ProductList from "./components/ProductList";
import theme from "@/utils/theme";


export default function SaleView() {
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
