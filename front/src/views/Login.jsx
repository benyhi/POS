import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Divider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../utils/theme';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => setIsRegistering(!isRegistering);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Form section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'primary.background',
            padding: 2,
            transform: isRegistering ? 'translateX(100%)' : 'translateX(0)',
            transition: 'transform 0.6s ease-in-out',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: '80%',
              maxWidth: '400px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'Poppins' }}>
              {isRegistering ? 'Crear una cuenta' : 'Bienvenido!'}
            </Typography>
            <Typography
              variant="body1"
              color="primary.text"
              fontFamily={'Roboto'}
              sx={{ mb: 1 }}
            >
              {isRegistering
                ? 'Completa los datos para registrarte.'
                : 'Completa los datos para iniciar sesión.'}
            </Typography>
            <TextField
              label={isRegistering ? 'Nombre completo' : 'Nombre de usuario'}
              name="username"
              variant="outlined"
              fullWidth
              required
            />
            {isRegistering && (
              <TextField
                label="Correo Electrónico"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
            )}
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            {isRegistering && (
              <TextField
                label="Confirma tu contraseña"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
            </Button>
            <Divider sx={{ my: 2 }}>o</Divider>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                borderColor: '#6c757d',
                color: '#6c757d',
                textTransform: 'none',
              }}
            >
              {isRegistering ? 'Registrarse con Google' : 'Iniciar con Google'}
            </Button>
          </Box>
        </Box>

        {/* Image section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
            padding: 4,
            transform: isRegistering ? 'translateX(-100%)' : 'translateX(0)',
            transition: 'transform 0.6s ease-in-out',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: 'Poppins', fontWeight: 'light', mb: 2 }}
          >
            POS y Gestión de Inventario
          </Typography>
          <img
            src="./assets/images/login_register.png"
            alt="Gestión de inventario"
            style={{ maxWidth: '70%', height: 'auto' }}
          />
          <Button
            type="button"
            variant="outlined"
            onClick={toggleForm}
            fullWidth
            sx={{
              borderColor: '#ffffff',
              color: '#ffffff',
              maxWidth: '400px',
              mt: 3,
              '&:hover': {
                backgroundColor: '#ffffff50',
              },
            }}
          >
            {isRegistering ? 'Iniciar Sesión' : 'Registrarse'}
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
