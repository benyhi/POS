import { ThemeProvider, Box, Typography, TextField } from "@mui/material";
import ProductCard from "./ProductCard";
import useSaleStore from '../../store/saleStore'
import theme from '../../utils/theme'

const ProductList = () => {
    const { addToCart, products } = useSaleStore()

    return(
    <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", gap: 2}}>
            {/* Productos */}
            <Box sx={{ flex: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontFamily: "theme.primary" }}> Productos </Typography>
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
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
                    ))}
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
    )
};

export default ProductList;