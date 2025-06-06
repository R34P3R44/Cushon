/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from "react";
import NumericInput from "./NumericInput";
import FundsDropdown from "./FundsDropdown";
import Buttons from "../../../components/Button";
import { Box, Typography, Slider } from "@mui/material";

const InvestmentForm: React.FC = () => {

    const [selectedFund, setSelectedFund] = useState<string>("")
    const [input, setInput] = useState<string>('');

    const error = useRef(false)

    const fundOptions: [] = [];
    const label: string = "";
    const text: string = ""

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const minAmount = 100

        const convertedString = parseInt(raw)
        // Allow only digits and a single dot
        if (/^[0-9]*\.?[0-9]*$/.test(raw)) {
            setInput(raw);

            if (!isNaN(convertedString) && convertedString < minAmount) {
                error.current = true
            }
            else {
                error.current = false
            }
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const parsed = parseFloat(raw);

        if (!isNaN(parsed)) {
            setInput(parsed.toFixed(2));
        }
    };

    const handleSelect = (e: string) => {
        setSelectedFund(e)
    }

    const handleSubmit = () => {
        window.alert("submitted")
    }

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                className="w-4/12 max-h-fit p-6 bg-formBackground shadow-md rounded-xl flex-col space-y-6"
            >
                <Typography variant="h6" >Investment Form</Typography>
                <Box className="min-w-3xl space-y-6 h-72 flex flex-col justify-between ">
                    <FundsDropdown
                        options={fundOptions}
                        label={label}
                        selectedFund={selectedFund}
                        handleSelect={handleSelect} />
                    <NumericInput
                        error={error}
                        label={label}
                        handleChange={handleChange}
                        input={input}
                        handleBlur={handleBlur} />
                    <Buttons
                        text={text}
                        error={error} />
                </Box>
            </Box>
        </>
    )
};

export default InvestmentForm;


