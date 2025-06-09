import { Box } from "@mui/material";
import React, { useCallback } from "react";
import type { Segments } from "../dataTypes";
import { ISA_MAX } from "../../../constants/headerLinks";

type ColourSegmentsProps = {
    segments: Segments[];
    totalInvested: number;
};

const ColourSegments: React.FC<ColourSegmentsProps> = ({ segments, totalInvested }) => {

    const renderSegmentData = useCallback((segment: Segments) => {
        if (segment.type === 'available') {
            return `Available (${segment.percentage.toFixed(2)}%)`;
        }
    
        if (totalInvested === ISA_MAX) {
            return `£${segment.amount.toFixed(2)}`;
        }
    
        // Normal invested segment:
        return `£${segment.amount.toFixed(2)} (${segment.percentage.toFixed(2)}%)`;
    }, [totalInvested]);

    return (
        <>
            {segments.map((segment, index) => {
                const left = segments
                    .slice(0, index)
                    .reduce((sum, seg) => sum + seg.percentage, 0) + segment.percentage / 2;

                return (
                    <Box
                        key={index}
                        sx={{
                            position: 'absolute',
                            left: `${left}%`,
                            transform: 'translateX(-50%)',
                            top: '5rem',
                            color: '#000',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        <div className="flex flex-row ">
                            {renderSegmentData(segment)}
                        </div>
                    </Box>
                );
            })}
        </>
    );
};

export default ColourSegments;