import React from 'react';
import './Login.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Footer } from '../../components/Footer/Footer';
import { Button } from '@mui/material';

export const Login = () => {
    return (
        <div>
            <div>
                <label className='login'>Inicio Sesión</label>
            </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='info'>
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Correo"
                    autoComplete="current-password"
                    />
                    <TextField
                    required
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    />
                </div>
            </Box>
            <div className='btn-div-login'>
                <Button variant="outlined" className='btn-login'>Iniciar Sesión</Button>
            </div>
            <div className='forgot-password'>
                <a href='#'>¿Olvidaste tu contraseña?</a>
            </div>
            <Footer/>
        </div>
    )
}

