import React from "react";
import InvestmentForm from "../components/InvestmentForm";
import InvestmentIndicator from "../components/InvestmentIndicator";
import PageBanner from "../../../components/PageBanner";
import Box from "@mui/material/Box";
import FundsSummary from "../components/FundsSummary";
import { useInvestmentPositions } from "../../auth/hooks/useAddInvestments";


const InvestmentPage: React.FC = () => {

    const { data: positions } = useInvestmentPositions();


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#FFFFFF' }}>
            <Box sx={{ display: 'flex', minWidth: '100vw' }}>
                <PageBanner />
            </Box>
            <Box sx={{ display: 'flex', minWidth: '100vw', justifyContent: 'center', gap: 2, padding: '0 2rem 0 2rem' }}>
                <InvestmentIndicator />
                <InvestmentForm />
            </Box>
            {positions && positions.length > 0 ? 
                <Box sx={{ display: 'flex', minWidth: '100vw', justifyContent: 'center', gap: 1, padding: '0 2rem 0 2rem' }}>
                    <FundsSummary />
                </Box>
                :
                null
            }
        </Box>
    )
};

export default InvestmentPage;