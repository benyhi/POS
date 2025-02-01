import { ThemeProvider, Box, Typography, Button, Divider, Autocomplete, TextField, Icon, IconButton, Modal } from "@mui/material";
import { useState } from 'react'
import useSaleStore from '../../store/saleStore'
import Calculator from "./Calculator";
import theme from "../../utils/theme";
import AddIcon from "../../assets/icons/add_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg"
import DeleteIcon from "@mui/icons-material/Delete";
import SubstractIcon from "../../assets/icons/remove_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg"
import CalcIcon from "../../assets/icons/calculate_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg"
import Close from "../../assets/icons/close_24dp_666666_FILL1_wght400_GRAD0_opsz24.svg"

const Cart = () => { 
    const [openCalc, setOpenCalc] = useState(false);
    const [openAddClient, setOpenAddClient] = useState(false);
    const [open, setOpen] = useState(false);
    const { emptyCart, cart, removeFromCart, subtractFromCart, addToCart } = useSaleStore();
    const [amount, setAmount] = useState("");
    const [ clientFormData, setClientFormData ] = useState({
      name: "",
      lastname: "",
      cuit: "",
      email: "",
      tel: "",
      adress: "",
    });

    const options = [
        { name: "Publico General", firstLetter: "A" },
        { name: "Pedro Perez", firstLetter: "P" },
        { name: "Juan Gomez", firstLetter: "J" },
        { name: "Maria Rodriguez", firstLetter: "M" },
        { name: "Luisa Martinez", firstLetter: "L" },
        { name: "Ana Hernandez", firstLetter: "A" },
        
    ];

    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const handleClientSubmit = (e) => {
      e.preventDefault();
      if (!clientFormData.name || !clientFormData.cuit || !clientFormData.tel ){
        alert("Por favor, complete los campos obligatorios.");
        return;
      }else{
        console.log(clientFormData);
        setClientFormData({ name: "", lastname: "", email: "", cuit: "", tel: "", adress: ""})

      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setClientFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const handlePaymentMethod = (option) => {
        console.log(option)
    };

    const handleSale = (products, total) => {
        console.log(products, total)
    };

    return(
    <ThemeProvider theme={theme}>
        <Box sx={{ flex: 1, border: "1px solid #ccc", borderRadius: 2, padding: 2, textAlign:'center' }}>
          <Typography variant="h5" sx={{ mb: 2, fontFamily: "Poppins"}}> Carrito </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              maxHeight: '100px'
            }}>
            <Autocomplete
              sx={{ 
                mb: 2,
                width: "100%",
                textAlign: 'center'
              }}
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="Seleccionar Cliente" />}
            />
            <Button sx={{p:0, maxHeight: '56px'}} onClick={()=> setOpenAddClient(true)}>
              <img src={AddIcon}/>
            </Button>
          </Box>
          <Box sx={{ display:"flex", gap: 1 }}>
            <Button variant="outlined" color="error" fullWidth onClick={emptyCart}>
              Vaciar Carrito
            </Button>
            <Button sx={{ p:2 }} onClick={(setOpenCalc)}>
              <Icon sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} > <img src={CalcIcon} height={"28px"}/> </Icon>
            </Button>
          </Box>
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
                  {item.name}
                </Typography>
                <Box>
                  <IconButton onClick={ () => addToCart(item) } >
                    <Icon>
                      <img src={AddIcon}/>
                    </Icon>
                  </IconButton>
                  <TextField
                    id="standar-basic"
                    variant="standard"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value) || 0;
                      setCart((prevCart) => 
                        prevCart.map((p) =>
                        p.id == item.id ? {...p, quantity: newQuantity}: p
                    ))}}
                    sx={{
                      maxWidth: "30px"
                    }}
                  >
                  </TextField>
                  <IconButton onClick={ () => subtractFromCart(item.id)}>
                    <Icon>
                      <img src={SubstractIcon}/>
                    </Icon>
                  </IconButton>
                </Box>
                <Typography>${item.quantity * item.price}</Typography>
                <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" align="right" sx={{ display:"flex", justifyContent: "center", mb: 2 }}>
            Total: ${total}
          </Typography>
          <Button variant="contained" color="success" fullWidth onClick={() => setOpen(true)}>
            Cobrar
          </Button>
        </Box>


    {/* Payment Modal */}
    
        <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >  
            <Box>
                <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: theme.palette.primary.background,
                    boxShadow: 24,
                    p: 4,
                }}
                >
                <IconButton
                    onClick={()=> setOpen(!open)}
                    sx={{
                    position: "absolute",
                    top: 8, 
                    right: 10 }}
                >
                    <Icon>
                    <img src={Close} />
                    </Icon>
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ my: 2 }}>
                    Resumen de la compra
                </Typography>
                <Autocomplete
                    sx={{ 
                    mb: 2,
                    width: "100%",
                    }}
                    options={['Efectivo', 'Tarjeta', 'Transferencia', 'Cheque']}
                    renderInput={(params) => <TextField {...params} label="Metodo de pago"/>}
                    onChange={(event, option) => handlePaymentMethod(option)}
                />
                <TextField
                    label='Monto pagado'
                    value={amount}
                    onChange={handleAmount}
                    type="number"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2,  }}
                />
                <Divider sx={{ my: 2 }} />
                <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2, fontFamily: "Roboto" }}>
                    Total: ${total}
                </Typography>
                <Typography sx={{fontFamily: "Roboto" }}>
                    Pagado: ${amount}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontFamily: "Roboto" }}>
                    Vuelto: ${amount == "" || amount < total ? 0 : amount-total}
                </Typography>
                <Button variant="contained" sx={{ mt: 2, backgroundColor:theme.palette.primary.success }} fullWidth onClick={() => handleSale(cart, total)}>
                    Confirmar
                </Button>
                <Button variant="contained" color="success" sx={{ mt: 2, backgroundColor:theme.palette.primary.cta }} fullWidth>
                    Generar Comprobante
                </Button>
                </Box>
            </Box>
        </Modal>

    { /* Calc Modal */}
        <Modal
        open={!!openCalc}
        onClose={() => setOpenCalc(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.primary.background,
            boxShadow: 24,
            }}>
                <IconButton
                onClick={()=> setOpenCalc(false)}
                sx={{
                    position: "absolute",
                    top: 8, 
                    right: 10 }}
                >
                    <Icon> <img src={Close} /> </Icon>
                </IconButton>
                <Calculator />
            </Box>
        </Modal>   

        { /* Add Client Modal */} 
        <Modal
          open={!!openAddClient}
          onClose={() => setOpenAddClient(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.primary.background,
            boxShadow: 24,
          }}>
            <IconButton
              onClick={()=> setOpenAddClient(false)}
              sx={{
              position: "absolute",
              top: 8, 
              right: 10 }}
            >
              <Icon> <img src={Close} /> </Icon>
            </IconButton>
            <Box
              component="form"
              onSubmit={handleClientSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2, padding:4, maxWidth: 400, margin: "auto" }}
            >
              <Typography variant="h6">Agregar Cliente</Typography> 
              <TextField
                    label="Nombre"
                    name="name"
                    value={clientFormData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Apellido"
                    name="lastname"
                    value={clientFormData.lastname}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="CUIT"
                    name="cuit"
                    value={clientFormData.cuit}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={clientFormData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Teléfono"
                    name="tel"
                    value={clientFormData.tel}
                    onChange={handleChange}
                />
                <TextField
                    label="Dirección"
                    name="adress"
                    value={clientFormData.adress}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Agregar Cliente
                </Button>
            </Box>
          </Box>
        </Modal>
    </ ThemeProvider>
    )}

export default Cart