import React from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";

type NumericInputProps = {
    label: string;
    handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    input: string;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error: { minimum: boolean; maximum: boolean; };
}

const NumericInput: React.FC<NumericInputProps> = ({ handleChange, input, handleBlur, error }) => {

    const handleErrorLabel = () => {
        if(error.minimum) {
            return "Minimum deposit is £1.00"
        }
        if(error.maximum) {
            return "Maximum deposit is £20,000.00"
        }
        else {
            return "Amount (Minimum deposit is £1.00)"
        }
    }

    return (
        <>
            <FormControl fullWidth>
                <TextField
                    error={error.maximum || error.minimum}
                    required
                    className="bg-white"
                    label={handleErrorLabel()}
                    type="text"
                    value={input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    slotProps={{
                        input: {
                            inputMode: 'decimal',
                            startAdornment: <InputAdornment position="start">£</InputAdornment>,
                        },
                    }}
                />
            </FormControl>
        </>
    )
};

export default NumericInput;