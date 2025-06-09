import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useInvestments, useInvestmentPositions } from "../../auth/hooks/useAddInvestments";
import InvestmentSlider from "./InvestmentSlider";
import InvestmentSummary from "./InvestmentSummary";
import ColourSegments from "./ColourSegments";
import { ISA_MAX } from "../../../constants/headerLinks";

const InvestmentIndicator: React.FC = () => {

    const { data: investments } = useInvestments();
    const { data: positions } = useInvestmentPositions();

    const totalInvested = useMemo(() => {
        if (!positions) return 0;
        return (positions.reduce((sum, pos) => sum + pos.totalAmount, 0));
    }, [positions]);

    const usedPercent = useMemo(() => Math.min((totalInvested / ISA_MAX) * 100, 100), [totalInvested]);
    const remainingPercent = useMemo(() => 100 - usedPercent, [usedPercent]);

    const segments = useMemo(() => [
        {
            color: 'rgb(220, 30, 131)',
            percentage: usedPercent,
            amount: totalInvested,
            type: 'invested' as const,
        },
        {
            color: '#2ecc71',
            percentage: remainingPercent,
            amount: ISA_MAX - totalInvested,
            type: 'available' as const,
        },
    ], [usedPercent, remainingPercent, totalInvested]);

    const gradientStops = segments.reduce<{ stops: string[], accPercent: number }>(
        (acc, segment) => {
            const start = acc.accPercent;
            const end = acc.accPercent + segment.percentage;
            acc.stops.push(
                `${segment.color} ${start}%`,
                `${segment.color} ${end}%`
            );
            acc.accPercent = end;
            return acc;
        },
        { stops: [], accPercent: 0 }
    );

    const gradient = `linear-gradient(to right, ${gradientStops.stops.join(", ")})`;

    return (
        <Box
            sx={{
                width: '100%',
                flex: 0.7,
                backgroundColor: '#F5F0F3',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                gap: 3,
                boxShadow: '0 0 0 3px rgba(220, 30, 131, 1)',
                boxSizing: 'border-box',
            }}>
            <Typography sx={{ height: "auto", width: "100%", display: 'flex', marginBottom: '1rem' }} variant="h6">ISA Allowance Tracker</Typography>
            <Box
                sx={{
                    position: 'relative',
                    height: '5rem',
                    width: '100%',
                    maxWidth: '1100px',
                    margin: '0 auto 0 auto',
                    background: gradient,
                    borderRadius: "10px",
                    mt: 1,
                    boxSizing: 'border-box',
                    padding: '2rem 0',
                }}
            >
                <ColourSegments 
                    segments={segments} 
                    totalInvested={totalInvested} 
                />
                <InvestmentSlider 
                    totalInvested={totalInvested}
                />
                <InvestmentSummary 
                    usedPercent={usedPercent} 
                    investments={investments}
                    totalInvested={totalInvested} 
                />
            </Box>
        </Box>
    )
};

export default InvestmentIndicator;