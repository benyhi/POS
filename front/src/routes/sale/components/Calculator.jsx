import { useState } from "react";
import { Button, Grid, TextField, Box, ThemeProvider } from "@mui/material";
import theme from "@/utils/theme";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput("");
  
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2, backgroundColor: theme.palette.primary.background, m: 6, maxWidth:"300px" }}>
        <TextField fullWidth value={input} variant="outlined" sx={{ mb: 2, backgroundColor:'#bec2c6' }} />
        <Grid container spacing={1}>
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
            <Grid item xs={3} key={item}>
                <Button
                variant="contained" 
                onClick={item === "=" ? handleCalculate : () => handleClick(item)}
                >
                {item}
                </Button>
            </Grid>
            ))}
            <Grid item xs={6}>
            <Button fullWidth variant="contained" color="error" onClick={handleClear}>
                C
            </Button>
            </Grid>
        </Grid>
        </Box>
    </ThemeProvider>
  );
}
