import { useState, useEffect } from 'react';
import { ThemeProvider, Box, Typography, TextField } from "@mui/material";
import ProductCard from "./ProductCard";
import useSaleStore from '@/store/saleStore';
import theme from '@/utils/theme';

const ProductList = () => {
    const { addToCart, products } = useSaleStore();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter products by code or name
    const filteredProducts = products.filter((item) => {
        const name = item.name?.toLowerCase() || ""; 
        const code = item.code?.toLowerCase() || ""; 
        return name.includes(searchTerm) || code.includes(searchTerm);
    });

    useEffect(() => {
        const handleKeyPress = (event) => {

            if (document.activeElement.tagName === "INPUT") return;

            const key = event.key;

            if (key.length === 1 || key === "Backspace") {
                setSearchTerm((prev) =>
                    key === "Backspace" ? prev.slice(0, -1) : prev + key
                );
            }

            // After press enter if code or name match with searchTerm that add to cart 
            if (key === "Enter") {
                const matchedProduct = products.find((item) =>
                    item.code.toLowerCase() === searchTerm.toLowerCase() ||
                    item.name.toLowerCase() === searchTerm.toLowerCase()
                );
                if (matchedProduct) {
                    addToCart(matchedProduct);
                    setSearchTerm("");
                }
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [searchTerm, products, addToCart]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ flex: 2 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontFamily: "theme.primary" }}>
                        Productos
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Buscar por código o nombre del producto..."
                        value={searchTerm}
                        onChange={handleSearchChange}
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
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <ProductCard key={item.id} item={item} onAddToCart={addToCart} />
                            ))
                        ) : (
                            <Typography sx={{ p: 2 }}>No se encontraron productos</Typography>
                        )}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default ProductList;
