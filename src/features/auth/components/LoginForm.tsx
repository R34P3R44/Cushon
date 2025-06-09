import React, { useState } from 'react';
import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import type { FirebaseError } from 'firebase/app';
import { getFirebaseAuthError } from '../../../utils/getFirebaseAuthError';
import PrimaryButton from '../../../components/PrimaryButton';

type Credentials = {
    email: string;
    password: string;
};

type LoginFormProps = {
    onLogin: (credentials: Credentials) => void;
    isLoading: boolean;
    error?: unknown;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, isLoading, error }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) =>
        event.preventDefault();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onLogin({ email, password });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mx: 'auto',
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                boxShadow: '0 0 5rem rgba(0, 0, 0, 0.4)',
                padding: '4rem',
                borderRadius: '6px',
                border: '2px solid rgba(224, 224, 224, 1)',
                fontSize: '0.9rem',
                width: 'auto',
                height: "auto",
                maxWidth: '30vw'
            }}
        >
            <Typography variant="h5" textAlign="center">
                Login to Your Account
            </Typography>

            {error ? (<Alert severity="error">{getFirebaseAuthError(error)}</Alert>) : null }

            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <PrimaryButton
                disabled={isLoading}
            >
                {isLoading ? 'Logging in...' : 'Login'}
            </PrimaryButton>

            <Typography
                component="span"
                sx={{
                    cursor: 'pointer',
                    border: '1px dashed currentColor',
                    '&:hover': {
                        opacity: 0.8,
                    },
                    userSelect: 'text',
                    whiteSpace: 'pre-line',
                    marginTop: '2rem',
                    height: 'auto',
                    padding: '1rem'
                }}
            >
                <div className='flex flex-col items-center justify-between h-24'>
                    <strong className='text-center underline'>Please use the below to login</strong>
                    <div>
                        <strong>j.doe@testEmail.com</strong>
                    </div>
                    <div>
                        <strong>Strong1shPassw0rd</strong>
                    </div>
                </div>
            </Typography>
        </Box>
    );
};