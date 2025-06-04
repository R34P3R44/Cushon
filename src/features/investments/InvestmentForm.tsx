import React from "react";
import AmountSlider from "./components/AmountSlider";
import FundDropdown from "./components/FundDropdown";
import Button from "./components/Button";

const InvestmentForm: React.FC = () => {
    
    return (
        <form className="max-w-md p-6 bg-white shadow rounded space-y-6 mx-auto ">
            <FundDropdown 
                options={fundOptions}
                label={label}
                selectedFund={selectedFund}
                onChange={setSelectedFund}
            />
            <AmountSlider
                label={label}
                value={amount}
                onChange={setAmount}
                milestones={milestones} //[1000, 5000, 10000, 25000] array
            />
            <Button
                text={text}
                onClick={handleSubmit}
            />
        </form>
)
};

export default InvestmentForm;