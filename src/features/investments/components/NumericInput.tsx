import React from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";

type NumericInputProps = {
    label: string;
    handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    input: string;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error: React.RefObject<boolean>;
}

const NumericInput: React.FC<NumericInputProps> = ({ handleChange, input, handleBlur, error }) => {

    return (
        <>
            <FormControl fullWidth>
                <TextField
                    error={error.current}
                    required
                    className="bg-white"
                    label={error.current ? "Minimum deposit is £100.00" : "Amount (Minimum deposit is £100.00)"}
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