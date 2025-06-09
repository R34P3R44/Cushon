import { Box, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useInvestments, useInvestmentPositions } from "../../auth/hooks/useAddInvestments";
import type { Timestamp } from "firebase/firestore";
import { format } from "date-fns";
import Divider from '@mui/material/Divider';


const InvestmentCard: React.FC = () => {

    const { data: investments } = useInvestments();
    const { data: positions } = useInvestmentPositions();

    const formatDate = (date?: Timestamp) => {
        if (!date) return
        const investmentDate = date.toDate();
        const formattedDate = format(investmentDate, 'dd/MM/yyyy HH:mm');

        return formattedDate
    }

    return (
        <>
            {positions && positions.map((position) => (
                <div className="flex flex-col" key={position.fundName}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.5)',
                        borderRadius: '6px',
                        border: '1px solid rgb(196, 196, 196)',
                        fontSize: '0.9rem',
                        width: 'auto',
                        minHeight: "25vh",
                        minWidth: '20vw',
                        backgroundColor: '#FFF',
                        padding: '0.5rem 0.5rem 0 0.5rem',
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {`${position.fundName}`}
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                {`£ ${position.totalAmount.toFixed(2)}`}
                            </Typography>
                        </Box>
                        <Divider />
                        <Typography sx={{ color: 'text.secondary', marginTop: '1rem' }}>Investment History</Typography>

                        <TableContainer sx={{height: '20vh'}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow sx={{ fontWeight: '800', }}>
                                        <TableCell sx={{ fontWeight: 800, width: 'auto' }} >Amount</TableCell>
                                        <TableCell sx={{ fontWeight: 800, width: '10rem' }} >Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{}}>
                                    {investments && investments.map((investment, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ width: '100%' }}>
                                                <TableCell align="left">
                                                    <Typography sx={{ color: 'text.secondary' }}>
                                                        {`£ ${investment.amount.toFixed(2)}`}
                                                    </Typography>
                                                </TableCell >
                                                <TableCell align="right" sx={{width: 'auto'}}>
                                                    <Typography sx={{ color: 'text.secondary' }}>
                                                        {`${formatDate(investment.timestamp)}`}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </div>
            ))}
        </>
    )
};

export default InvestmentCard;