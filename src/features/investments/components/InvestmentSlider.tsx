import { Slider } from "@mui/material";
import React from "react";

type InvestmentSliderProps = {
    totalInvested: number;
}

const InvestmentSlider: React.FC<InvestmentSliderProps> = ({totalInvested}) => {

    
    return (
        <Slider
        value={totalInvested}
        min={0}
        max={20000}
        step={1}
        valueLabelDisplay="on"
        disabled
        sx={{
            position: "relative",
            top: "-3rem",
            height: '0.7rem',
            width: "100%",
            color: "#000",

            "& .MuiSlider-markLabel": {
                display: 'none',
            },
            '& .MuiSlider-mark': {
                display: 'none'
            },
            '& .MuiSlider-thumb': {
                height: '1rem',
                width: '1rem',
                backgroundColor: 'rgb(220, 30, 131)',
                border: '2px solid white',
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: '0 0 0 6px rgba(220, 30, 131, 0.5)',
                    display: 'none'
                },
            },

        }}
    />

)
};

export default InvestmentSlider;