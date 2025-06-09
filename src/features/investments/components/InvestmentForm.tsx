import React, { useCallback, useMemo, useState } from "react";
import NumericInput from "./NumericInput";
import FundsDropdown from "./FundsDropdown";
import { Box, Typography } from "@mui/material";
import PrimaryButton from "../../../components/PrimaryButton";
import { useAddInvestments } from "../../auth/hooks/useAddInvestments";
import { calculateTotalInvested } from "../../../utils/totalinvested";
import { useInvestmentPositions } from "../../auth/hooks/useAddInvestments";
import { ISA_MAX } from "../../../constants/headerLinks";

const InvestmentForm: React.FC = () => {

    const [selectedFund, setSelectedFund] = useState<string>("")
    const [input, setInput] = useState<string>('');
    const [error, setError] = useState<{ minimum: boolean; maximum: boolean }>({ minimum: false, maximum: false })

    const addInvestment = useAddInvestments();
    const { data: positions } = useInvestmentPositions();
    

    const sumOfAllInvested = useMemo(() => calculateTotalInvested(positions), [positions]);

    const label: string = "";

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;

        if (/^[0-9]*\.?[0-9]*$/.test(raw)) {
            setInput(raw);
        }
    }, []);

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const parsed = parseFloat(raw);
        const minAmount = 1;

        if (!isNaN(parsed)) {
            setInput(parsed.toFixed(2));
            const totalAfterInvestment = parsed + sumOfAllInvested;

            setError({
                minimum: parsed < minAmount,
                maximum: totalAfterInvestment > ISA_MAX,
            });
        }
        else {
            setError({
                minimum: false,
                maximum: false,
            });
        }
    }, [sumOfAllInvested]);

    const handleSelect = useCallback((e: string) => {
        setSelectedFund(e)
    }, [])

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!selectedFund || error.minimum || error.maximum || !input) {
            return
        }

        try {
            await addInvestment.mutateAsync({
                fundName: selectedFund,
                amount: parseFloat(input),
            });

            setInput('');
            setSelectedFund('');
            // setSubmit Success;
        } catch (error) {
            // setSubmit Fail;
            console.error("Investment submission failed", error);
        }
    }, [selectedFund, error, input, addInvestment])

    const isError = error.minimum || error.maximum;

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: '33.3333%',
                flex: 0.3,
                padding: '1.5rem',
                backgroundColor: '#F5F0F3',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 0 0 3px rgba(220, 30, 131, 1)',
              }}
        >
            <Typography variant="h6" >Investment Form</Typography>
            <Box className="min-w-3xl space-y-6 h-72 flex flex-col justify-between ">
                <FundsDropdown
                    label={label}
                    selectedFund={selectedFund}
                    handleSelect={handleSelect}
                />
                <NumericInput
                    error={error}
                    label={label}
                    handleChange={handleChange}
                    input={input}
                    handleBlur={handleBlur} 
                />

                <PrimaryButton
                    error={isError}
                    sx={{ width: '10rem', display: 'flex', alignSelf: 'flex-end' }}
                    disabled={isError}
                    type='submit'
                >
                    Invest Now
                </PrimaryButton>
            </Box>
        </Box>
    )
};

export default InvestmentForm;


