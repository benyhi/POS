import { Card, CardMedia, CardContent, CardActions, Typography, Button, ThemeProvider} from "@mui/material"
import theme from "../../utils/theme"
import useSaleStore from "../../store/saleStore"


const ProductCard = ({ item, onAddToCart }) => (
    <ThemeProvider theme={theme}>
        <Card 
        key={item.id}
        sx={{
            width: "100%",
            maxWidth: "218px",
            display: "flex",
            flexDirection: "column",
        }}>
            <CardMedia 
                component="img"
                alt="product"
                height="140"
                image={item.image}
                sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom>
                {item.name}
                </Typography>
                <Typography variant="body2" color={theme.palette.primary.text}>
                Cod. {item.code}
                </Typography>
                <Typography variant="body2" color={theme.palette.primary.text}>
                ${item.price}
                </Typography>
                <Typography variant="body2" color={item.quantity<= 3 ? "red" : theme.palette.primary.text}>
                Cantidad Disponible: {item.quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                variant="contained" 
                onClick={() => onAddToCart(item)} 
                sx={{
                    backgroundColor: "transparent",
                    color: theme.palette.primary.cta,
                    border: "1px solid",
                    borderColor: theme.palette.primary.cta,
                    paddingY: 0.4,
                    fontSize: '.8em',
                    "&:hover":{
                    backgroundColor:"rgba(0, 123, 255, 0.1)"
                    }
                }}> 
                Agregar 
                </Button>
            </CardActions>
        </Card>
    </ThemeProvider>
  )

export default ProductCard;