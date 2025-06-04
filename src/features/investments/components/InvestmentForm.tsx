import React, { useState } from "react";
import AmountSlider from "./AmountSlider";
import FundDropdown from "./FundDropdown";
import Button from "./Button";

const InvestmentForm: React.FC = () => {

    const [selectedFund, setSelectedFund] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)

    const handleSubmit = () => {
        console.log("Submitted")
    }

    const fundOptions: [] = [];
    const milestones: [] = [];
    const label: string = "";
    const text: string = ""
    const onSelect: (value: string) => void = setSelectedFund;
    const onChange: (value: number) => void = setAmount;
    const onClick: () => void = handleSubmit;


    return (
        <form className="max-w-md p-6 bg-white shadow rounded space-y-6 mx-auto ">
            <FundDropdown 
                options={fundOptions}
                label={label}
                selectedFund={selectedFund}
                onSelect={onSelect}
            />
            <AmountSlider
                label={label}
                value={amount}
                onChange={onChange}
                milestones={milestones} //[1000, 5000, 10000, 25000] array
            />
            <Button
                text={text}
                onClick={onClick}
            />
        </form>
)
};

export default InvestmentForm;