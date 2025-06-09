import { Box, Typography } from "@mui/material";
import React from "react";
import InvestmentCard from "./InvestmentCard";
import Divider from '@mui/material/Divider';


const FundsSummary: React.FC = () => {    

    return (
        <>
            <Box sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <Typography variant="h5" textAlign="left">Your investments</Typography>
                <Divider />
                <Box sx={{display: 'flex', padding: '0 1rem 0 1rem'}}>
                    <InvestmentCard/>
                </Box>
            </Box>
        </>
    )
};

export default FundsSummary;