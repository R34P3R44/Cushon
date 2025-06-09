import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useAuthStore } from "../store/authStore";
import { format } from 'date-fns';

const PageBanner: React.FC = () => {

    const user = useAuthStore((state) => state.user);
    const previousLoginAt = useAuthStore((state) => state.previousLoginAt)

    const formatLastLoginData = useMemo(() => {

        if(!previousLoginAt) return "Loading..."
        
        const lastLoginDate = new Date(previousLoginAt);
        const formattedDate = format(lastLoginDate, 'dd/MM/yyyy HH:mm');

        return formattedDate
    }, [previousLoginAt])
    
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(220, 30, 131, 0.5)',
                color: 'rgba(0, 0, 0, 1)',
                textAlign: 'center',
                mb: 1,
                display: 'flex',
                width: '100vw',
                padding: '0.5rem 1.5rem 0.5rem 1.5rem',
                height: 'auto'
            }}
        >
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
                <Typography variant="h5" sx={{fontWeight: 550, color: '#333'}}>{`Welcome back ${user?.displayName}`}</Typography>
                <Typography sx={{ alignSelf: 'end', fontWeight: '600'}} variant="subtitle1">{`Last logged in: ${formatLastLoginData}`}</Typography>
            </Box>
        </Box>
    )
};

export default PageBanner;