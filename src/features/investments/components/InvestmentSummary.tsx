import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import type { Investment } from "../dataTypes";
import { formatDate } from "../../../utils/investmentIndicator";

type InvestmentSummaryProps = {
    investments?: Investment[];
    usedPercent: number;
    totalInvested: number;
}

const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({ investments, usedPercent, totalInvested }) => {

    const latestTimestamp = useMemo(() => {
        if (!investments) return ;

        // Filter out missing timestamps, sort descending, get first one
        const sortedInvestments = investments
            // .filter(inv => inv.timestamp)
            .sort((a, b) => b.timestamp!.toMillis() - a.timestamp.toMillis());

        return sortedInvestments[0]?.timestamp;
    }, [investments]);

    return (
        <Box sx={{ height: "auto", width: "100%", display: 'flex', flexDirection: 'column', backgroundColor: '#FFF', padding: '0.5rem', borderRadius: '6px', border: '1px solid rgb(196, 196, 196)', marginTop: '3rem' }}>
            <Typography variant="body1">
                <span>
                    <span className="text-2xl mr-5">🏦</span>You have <strong>{`£${totalInvested}`}</strong> in your ISA allowance.
                </span>
            </Typography>
            <Typography variant="body1">
                <span>
                    <span className="text-2xl mr-5">📊</span>You have used <strong>{`${usedPercent.toFixed(2)}%`}</strong> of your £20,000 annual allowance.
                </span>
            </Typography>
            <Typography variant="body1">
                <span>
                    {latestTimestamp? 
                        <>
                            <span className="text-2xl mr-5">💰</span>
                            Your last contribution was on <strong>{formatDate(latestTimestamp)}</strong>.
                        </>
                        : 
                        <>
                            <span className="text-2xl mr-5">💰</span>
                            <span>You dont have any contributions yet.</span>
                        </>
                    }
                </span>
            </Typography>
            <Typography variant="body1">
                <span>
                    <span className="text-2xl mr-5">🗓️</span>Tax year ends on <strong>5 April 2026</strong> — don't miss your opportunity to top up.
                </span>
            </Typography>
        </Box>
    )
};

export default InvestmentSummary;