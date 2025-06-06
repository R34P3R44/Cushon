import { Box, Typography, Slider } from "@mui/material";
import React from "react";



const InvestmentIndicator: React.FC = () => {

    const marks = [
        {
            value: 3000,
            label: "£3,000",
        },
        {
            value: 11000,
            label: "£11,000",
        },
        {
            value: 18000,
            label: "£2,000",
        },
    ];



    return (
        <div className="bg-formBackground justify-evenly w-6/12 max-h-96 h-72 rounded-xl p-6" >
            <Box sx={{ height: "100%", width: "100%", display: 'flex', flexDirection: "column",}}>
                <Typography sx={{ height: "30%", width: "100%", display: 'flex', }} variant="h6">ISA Allowance Tracker</Typography>
                <Box
                    sx={{
                        height: '2.5rem',
                        background: `linear-gradient(to right,
                            #f1c40f 0%,
                            #f1c40f 15%,
                            #e74c3c 15%,
                            #e74c3c 70%,
                            #2ecc71 70%,
                            #2ecc71 100%)`,
                        borderRadius: "10px",
                        mt: 1,
                        position: "relative",
                        top: 20
                    }}
                >
                    <Slider
                        value={18000}
                        min={0}
                        max={20000}
                        marks={marks}
                        step={100}
                        disabled
                        sx={{
                            position: "absolute",
                            top: "-1.7rem",
                            height: '0.7rem',
                            width: "100%",
                            color: "#000",
                            "& .MuiSlider-markLabel": {
                                fontWeight: "bold",
                            },

                            '& .MuiSlider-thumb': {
                                height: '1rem',
                                width: '1rem',
                                backgroundColor: 'rgb(220 30 131)',
                                border: '2px solid white',
                                boxShadow: '0 0 0 4px rgba(46, 204, 113, 0.3)',
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: '0 0 0 6px rgba(46, 204, 113, 0.5)',
                                },
                                '&::after': {
                                    content: '"£18,000"',
                                    position: 'absolute',
                                    top: '-2.5rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'rgb(220 30 131)',
                                    color: 'white',
                                    padding: '6px 16px',
                                    borderRadius: '6px',
                                    fontSize: '0.9rem',
                                    width: 'auto',
                                    height: "auto",
                                    fontWeight: 600,
                                },
                            },

                        }} />
                </Box>
            </Box>

        </div>
    )
};

export default InvestmentIndicator;